import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = this.props.layouts;
    return (
        <ResponsiveGridLayout 
            className="layout" 
            layouts={layouts}
            breakpoints={{lg: 1200, md: 800, sm: 400}}
            cols={{lg: 3, md: 2, sm: 1}}
            style={{
                height: '100%',
                overflow: 'hidden',
                background: this.props.bg
            }}
            rowHeight={230}
            compactType="none"
        >
            { this.props.children }
        </ResponsiveGridLayout>
    )
  }
}

export default MyResponsiveGrid;