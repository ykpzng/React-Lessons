import React from 'react'
import { connect } from 'react-redux';
import { requestPosts } from "../store/actions/index";


let Channel = ({ requestPosts, channelName, channelString }) => (
  <div className=" col-lg-2 col-md-4 col-sm-6 ">
    {console.log(channelString)}
    <div onClick={() => requestPosts(channelString)} className="channel-button" style={{ color: "orange" }} >
      <p>{channelName}</p>
    </div>
  </div>
)


const mapStateToProps = (state) => {
  return {
    channel: state
  }
};

const mapDispatchToProps = {
  requestPosts
}

Channel = connect(mapStateToProps, mapDispatchToProps)(Channel)
export default Channel;