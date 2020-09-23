package com.swmansion.gesturehandler.react;

import android.graphics.Rect;
import android.util.Log;
import android.content.Context;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.views.scroll.ReactScrollView;
import com.facebook.react.views.view.ReactViewGroup;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class RNGestureHandlerRootView extends ReactViewGroup {

  private static boolean hasGestureHandlerEnabledRootView(ViewGroup viewGroup) {
    UiThreadUtil.assertOnUiThread();
    ViewParent parent = viewGroup.getParent();
    while (parent != null) {
      if (parent instanceof RNGestureHandlerEnabledRootView || parent instanceof RNGestureHandlerRootView) {
        return true;
      }
      parent = parent.getParent();
    }
    return false;
  }

  private boolean mEnabled;
  private @Nullable RNGestureHandlerRootHelper mRootHelper;

  public RNGestureHandlerRootView(Context context) {
    super(context);
  }

  @Override
  protected void onAttachedToWindow() {
    super.onAttachedToWindow();

    mEnabled = !hasGestureHandlerEnabledRootView(this);

    if (!mEnabled) {
      Log.i(
              ReactConstants.TAG,
              "[GESTURE HANDLER] Gesture handler is already enabled for a parent view");
    }

    if (mEnabled && mRootHelper == null) {
      mRootHelper = new RNGestureHandlerRootHelper((ReactContext) getContext(), this);
    }
  }

  public void tearDown() {
    if (mRootHelper != null) {
      mRootHelper.tearDown();
    }
  }

  private List<ReactScrollView> scrollViews = new ArrayList<>();

  private void initScrollViews(View view) {
    if (view instanceof ReactScrollView) scrollViews.add((ReactScrollView) view);
    //
    if (view instanceof ViewGroup) {
      int childCount = ((ViewGroup) view).getChildCount();
      for (int i=0; i<childCount; i++) {
        View child = ((ViewGroup) view).getChildAt(i);
        initScrollViews(child);
      }
    }
  }

  private boolean clickScrollView(MotionEvent ev) {
    if (scrollViews.isEmpty()) initScrollViews(this);
    //
    for (ReactScrollView scrollView : scrollViews) {
      Rect outRect = new Rect();
      scrollView.getChildAt(0).getDrawingRect(outRect);
      if (outRect.contains((int)ev.getX(), (int)ev.getY())) return true;
    }
    return false;
  }

  @Override
  public boolean dispatchTouchEvent(MotionEvent ev) {
//    RNGestureHandlerModule.ExcludeRegion excludeRegion = RNGestureHandlerModule.getExcludeRegion();
//    if (ev.getActionMasked() == MotionEvent.ACTION_DOWN && excludeRegion.in(ev, getResources())) {
//      return super.dispatchTouchEvent(ev);
//    }
    if (ev.getActionMasked() == MotionEvent.ACTION_DOWN && clickScrollView(ev)) return super.dispatchTouchEvent(ev);
    if (mEnabled && Assertions.assertNotNull(mRootHelper).dispatchTouchEvent(ev)) {
      return true;
    }
    return super.dispatchTouchEvent(ev);
  }

  @Override
  public boolean onInterceptTouchEvent(MotionEvent ev) {
    return super.onInterceptTouchEvent(ev);
  }

  @Override
  public void requestDisallowInterceptTouchEvent(boolean disallowIntercept) {
    if (mEnabled) {
      Assertions.assertNotNull(mRootHelper).requestDisallowInterceptTouchEvent(disallowIntercept);
    }
    super.requestDisallowInterceptTouchEvent(disallowIntercept);
  }
}
