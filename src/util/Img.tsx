import * as React from "react";
interface ImgProps{
    dataSrc:string;
}
export class Img extends React.Component<ImgProps,any>{
    constructor(props:ImgProps){
        super(props);
    }
    render(){
        let img1:string = "img/small/"+this.props.dataSrc;
        let img2:string = "img/mid/"+this.props.dataSrc;
        let img3:string = "img/big/"+this.props.dataSrc;
        return(
            <picture alt="image description">
                <source srcSet={img1} alt="响应式图片" media="(max-width: 750px)" />
                <source srcSet={img2} alt="响应式图片" media="(max-width: 1500px)" />
                <img src={img3} alt="响应式图片" />
            </picture>
        )
    }
}