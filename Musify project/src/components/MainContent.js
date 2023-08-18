import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MicOffIcon from "@mui/icons-material/MicOff";
import MessageIcon from "@mui/icons-material/Message";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallEndIcon from "@mui/icons-material/CallEnd";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SettingsIcon from "@mui/icons-material/Settings";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="mainContent">
      <div className="whiteCard">
        <div className="cardHeader">
          <span className="musicBasics">Music Basics</span>
          <div className="rightContent">
            <div className="smallCircle"></div>
            <span className="musicNotes">Music Notes</span>
          </div>
        </div>
        <div className="pianoImageContainer">
          <img
            src="https://i.pinimg.com/564x/a8/e2/96/a8e29654195275d68073b36755a0300e.jpg"
            alt="Piano"
            className="pianoImage"
          />
          <div className="imageIcons">
            <div className="iconCircle">
              <FullscreenIcon className="whiteIcon" />
            </div>
            <div className="iconCircle">
              <SettingsIcon className="whiteIcon" />
            </div>
          </div>
          <div className="transparentBlock">
            <div className="iconCircle">
              <PlayArrowIcon className="whiteIcon" />
            </div>
            <div className="iconCircle">
              <MicOffIcon className="whiteIcon" />
            </div>
            <div className="iconCircle">
              <MessageIcon className="whiteIcon" />
            </div>
            <div className="iconCircle">
              <MoreHorizIcon className="whiteIcon" />
            </div>
            <div className="redIconCircle">
              <CallEndIcon className="whiteIcon" />
            </div>
          </div>
        </div>
        <div className="cardFooter">
          <div className="leftFooterContent">
            <div className="smallBlackCircle"></div>
            <span className="totalUsers">Total Users Online: 34</span>
          </div>
          <div className="rightFooterContent">
            <span className="timeText">Time</span>
            <AccessTimeIcon className="clockIcon" />
            <span className="remainingText">Remaining: 45 min</span>
          </div>
        </div>
      </div>
      <div className="participantsSection">
        <span className="participantsText">Participants</span>
        <div className="navigationIcons">
          <NavigateBeforeIcon className="navIcon" />
          <NavigateNextIcon className="navIcon" />
        </div>
      </div>
      <div className="smallWhiteCards">
        {[
          "https://i.pinimg.com/564x/91/7d/ce/917dceb8f06724e76b770d76924b3791.jpg",
          "https://i.pinimg.com/564x/a7/9d/ff/a79dff90774dd22b5bc2117aa31990f0.jpg",
          "https://i.pinimg.com/564x/9d/bd/6b/9dbd6b63b448de4638de3ce215b32176.jpg"
        ].map((src) => (
          <div className="whiteCardSmall">
            <div className="cardImageContainer">
              <img src={src} alt="Microphone" className="cardImage" />
              <div className="microphoneCircle">
                <MicOffIcon className="microphoneIcon" />
              </div>
            </div>
          </div>
        ))}
        <div className="whiteCardSmall">
          <div className="cardImageContainer">
            <img
              src="https://i.pinimg.com/564x/97/e1/7f/97e17f419b01a0fbc81aa282775e607c.jpg"
              alt="Keyboard"
              className="cardImage"
            />
            <div className="keyboardCircle blackCircle">
              <KeyboardIcon className="whiteIcon" />
            </div>
          </div>
        </div>
        <div className="whiteCardSmall">
          <div className="cardImageContainer">
            <img
              src="https://i.pinimg.com/564x/f7/83/6d/f7836dc67a59c462e80288c2f32b9b1b.jpg"
              alt="Image"
              className="cardImage"
            />
            <div className="loadMoreBlock">
              <span className="loadMoreText">Load More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
