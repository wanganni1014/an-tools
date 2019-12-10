import React from 'react';
import ReactCssModule from 'react-css-modules';
import style from './stylesheets/index.scss';

interface iconProps {
    size: string
}

@ReactCssModule(style)
class Icon extends React.Component<iconProps, {}> {
    render() {
        return (
            <img src="http://a3.att.hudong.com/35/34/19300001295750130986345801104.jpg" alt="icon"/>
        );
    }
    // render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    //     const size = new Map([
    //         ['small', '16'],
    //         ['normal', '18'],
    //         ['big', '20'],
    //         ['undefined', '20'],
    //     ]);
    //     return (
    //         <img src="http://dmimg.5054399.com/allimg/pkm/pk/22.jpg" alt="icon" width={size.get(this.props.size)} />
    //     );
    // }
}

export default Icon;