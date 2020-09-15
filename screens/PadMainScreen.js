import React, { useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { ColorSchemeProvider, useDynamicValue, DynamicStyleSheet } from 'react-native-dynamic';

import TriplePaneLayout, { STATE as OPEN_STATE } from '../components/TriplePaneLayout';
import { gestureHandlerRootHOC } from '../thirdparty/react-native-gesture-handler';
import MainDrawer from '../components/MainDrawer';
import PadNoteList from '../components/PadNoteList';
import NoteEditor from '../components/NoteEditor';
import ThemedStatusBar from '../components/ThemedStatusBar';
import { getDeviceDynamicColor } from '../config/Colors';

const useForceUpdate = () => useState()[1];

const PadMainScreen: () => React$Node = () => {
  //
  const layoutRef = useRef(null);
  //
  const styles = useDynamicValue(dynamicStyles);
  //
  const pane1Width = 288;
  const pane2Width = 368;
  //
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const windowWidth = Math.max(screenWidth, screenHeight);
  //
  const isLandscape = screenWidth > screenHeight;

  const editorMaxWidth = isLandscape
    ? Math.min(Math.min(screenWidth, screenHeight), windowWidth - pane2Width)
    : screenWidth;
  //
  const editorStyle = {
    ...styles.editor,
    width: editorMaxWidth,
  };

  function handleToggleMenu() {
    //
    const openState = layoutRef.current.currentOpenState();
    if (openState === OPEN_STATE.openAll) {
      layoutRef.current.toggleOpenState(OPEN_STATE.open2);
    } else {
      layoutRef.current.toggleOpenState(OPEN_STATE.openAll);
    }
  }

  function handleGetExcludeRegions(state) {
    //
    const topHeight = 180;
    //
    let excludeRegions;
    if (state === OPEN_STATE.open2) {
      excludeRegions = [{
        x: 0,
        y: topHeight,
        width: pane2Width,
        height: screenHeight - topHeight,
      }];
    } else if (state === OPEN_STATE.openAll) {
      excludeRegions = [{
        x: pane1Width,
        y: topHeight,
        width: pane2Width,
        height: screenHeight - topHeight,
      }];
    }
    return excludeRegions;
  }
  function handleBeginEditing() {
    const layout = layoutRef.current;
    const openState = layout.currentOpenState();
    if (isLandscape) {
      if (openState === OPEN_STATE.openAll) {
        layoutRef.current.toggleOpenState(OPEN_STATE.open2);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (openState !== OPEN_STATE.closeAll) {
        // layoutRef.current.toggleOpenState(OPEN_STATE.closeAll);
      }
    }
  }

  //
  const forceUpdate = useForceUpdate();
  //
  //
  return (
    <ColorSchemeProvider>
      <ThemedStatusBar />
      <TriplePaneLayout
        ref={layoutRef}
        onGetExcludeRegions={handleGetExcludeRegions}
        onLayout={forceUpdate}
        pane1Width={pane1Width}
        pane2Width={pane2Width}
        pane1={<MainDrawer style={styles.drawer} />}
        pane2={(
          <PadNoteList
            onToggleMenu={handleToggleMenu}
          />
        )}
        pane3={(
          <NoteEditor
            containerStyle={styles.editorContainer}
            editorStyle={editorStyle}
            onBeginEditing={handleBeginEditing}
          />
        )}
      />
    </ColorSchemeProvider>
  );
};

const PadMainScreenImpl = gestureHandlerRootHOC(PadMainScreen);

PadMainScreenImpl.options = {
  topBar: {
    visible: false,
  },
};

const dynamicStyles = new DynamicStyleSheet({
  drawer: {
    backgroundColor: getDeviceDynamicColor('drawerBackground'),
    flex: 1,
  },
  noteListContainer: {
    flex: 1,
    backgroundColor: getDeviceDynamicColor('noteListBackground'),
    height: '100%',
  },
  noteList: {
    flex: 1,
    height: '100%',
  },
  title: {
    paddingLeft: 18,
    color: getDeviceDynamicColor('noteListTitle'),
  },
  listHeader: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  headerButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  editorContainer: {
    backgroundColor: getDeviceDynamicColor('noteBackground'),
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  editor: {
    alignSelf: 'center',
    height: '100%',
    backgroundColor: getDeviceDynamicColor('noteBackground'),
  },
  searchBarContainerStyle: {
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
  },
  searchBarInputContainerStyle: {
    backgroundColor: getDeviceDynamicColor('searchBarBackground'),
  },
});

export default PadMainScreenImpl;
