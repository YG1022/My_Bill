import React from 'react';
import MenuSider from './MenuSider';
import ShallowRenderer from 'react-test-renderer/shallow';
import Sider from 'antd/lib/layout/Sider';

describe('MenuSider', () => {
  it('should render the whole sidebar', () => {
    // Arrange
    const renderer = new ShallowRenderer();
    renderer.render(<MenuSider />);
    // Act
    const result = renderer.getRenderOutput();
    // Assert
    expect(result.type).toEqual((<Sider />).type);
    expect(result.props.collapsible).toBeTruthy();
    expect(result.props.collapsed).toBeFalsy();
    expect(result.props.onCollapse).toBeDefined();
    expect(result.props.children).toHaveLength(2);
    expect(result.props.children[0].props.className).toEqual('search-holder');
    expect(result.props.children[1].props.theme).toEqual('dark');
  });
});