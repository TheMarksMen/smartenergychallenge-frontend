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
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            style={{
                height: '100%',
                overflow: 'hidden'
            }}
        >
            { this.props.children }
        </ResponsiveGridLayout>
    )
  }
}

export default MyResponsiveGrid;