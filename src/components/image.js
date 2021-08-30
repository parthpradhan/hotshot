import React from 'react';
import '../App.css';
import {Button,Popover,OverlayTrigger} from 'react-bootstrap';
class Image extends React.Component{
  render(){
    return(
      <>
      <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id={"popover-positioned-bottom"}>
          <Popover.Header as="h3">View variants</Popover.Header>
          <Popover.Body>
          <Button variant="dark  link-btn">
        <a className="text-white"href={this.props.hd} download target="_blank" rel="noreferrer">
        HD
      </a></Button>
      <Button variant="dark link-btn">
        <a className="text-white"href={this.props.raw} download target="_blank" rel="noreferrer">
        RAW
      </a></Button>
      <Button variant="dark link-btn">
        <a className="text-white"href={this.props.src} download target="_blank" rel="noreferrer">
        Regular
      </a></Button>
      <Button variant="dark link-btn">
        <a className="text-white"href={this.props.thumb} download target="_blank" rel="noreferrer">
        Thumbnail
      </a></Button>
      <Button variant="dark link-btn">
        <a className="text-white"href={this.props.small} download target="_blank" rel="noreferrer">
        Small
      </a></Button>
          </Popover.Body>
        </Popover>
      }
    >
      <img src={this.props.src} alt="img"/>
    </OverlayTrigger>
      </>
    ) 
  }
}
export default Image;