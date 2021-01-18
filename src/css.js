const string = `

body {
    background-color: #1B94DD;
}

.doraemon {

    border: 1px solid #1B94DD;
}

.doraemon .catHead {
    width: 388px;
    height: 1235px;
    border: 2px solid black;
    border-radius: 185px / 371px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
}

.doraemon .catHead .eye {
    width: 50px;
    height: 70px;
    top: 10px;
    background: #fffcff;
    border: 2px solid black;
    position: absolute;
    z-index: 2;
}

.doraemon .catHead .left {
    width: 48px;
    height: 65px;
    border-radius: 31px / 40px;
    transform: rotate(-8deg);
    left: 125px;
    position: relative;

}

.doraemon .catHead .left::before {
    content: "";
    position: absolute;
    background-color: black;
    width: 43px;
    height: 3px;
    top: 17px;
    transform: rotate(-17deg);

}

.doraemon .catHead .left::after {
    content: "";
    position: absolute;
    background: black;
    width: 15px;
    height: 10px;
    top: 27px;
    right: 6px;
    border-radius: 18px / 8px;
    transform: rotate(100deg);

}

.doraemon .catHead .right {
    width: 55px;
    height: 68px;
    border-radius: 31px / 40px;
    transform: rotate(-8deg);
    right: 155px;
}

.doraemon .catHead .right::before {
    content: "";
    position: absolute;
    background-color: black;
    width: 50px;
    height: 3px;
    top: 17px;
    right: -8px;
    transform: rotate(47deg);

}

.doraemon .catHead .right::after {
    content: "";
    position: absolute;
    background: black;
    width: 15px;
    height: 10px;
    top: 23px;
    left: 6px;
    border-radius: 18px / 8px;
    transform: rotate(100deg);

}

.doraemon .catHead .profile {
    width: 235px;
    height: 157px;
    border: 2px solid black;
    background: white;
    border-radius: 300px /150px;
    position: absolute;
    z-index: 1;
    transform: rotate(-5deg);
    top: 40px;
    left: 73px;

}

.doraemon .catHead .nose {
    width: 44px;
    height: 44px;
    border: 2px solid black;
    background: #E51F15;
    border-radius: 22px;
    position: absolute;
    left: 158px;
    top: 56px;
    z-index: 3;

}

.doraemon .catHead .nose::before {
    content: "";
    width: 11px;
    height: 11px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 8px;
    left: 8px;
    box-shadow: inset 0px 0px 2px 1px #E51F15;
}


.doraemon .catHead .moustache {

    height: 66px;
    position: relative;
    top: 32px;
    z-index: 3;
    display: flex;
    justify-content: center;


}

.doraemon .catHead .moustacheLeft {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;

}

.doraemon .catHead .placeholder {
    width: 5px;
}

.doraemon .catHead .mouth {
    width: 30px;
    border-left: 3px solid black;
}

.doraemon .catHead .mouth::before {
    content: "";
    border-top: 2px solid black;
    border-radius: 16px 1px/14px 0 0;
    background: white;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 63px;
    left: 160px;
}

.doraemon .catHead .moustacheRight {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

.doraemon .catHead .moustacheLeft  li {
    height: 3px;
    background: black;
}

.doraemon .catHead .moustacheLeft .firstLeft {
    width: 60px;
    transform: rotate(8deg);
}

.doraemon .catHead .moustacheLeft .secondLeft {
    width: 55px;
    transform: translate(-8px) rotate(-4deg);


}

.doraemon .catHead .moustacheLeft .thirdLeft {
    width: 60px;
    transform: rotate(-15deg);

}

.doraemon .catHead .moustacheRight li {
    height: 3px;
    background: black;

}

.doraemon .catHead .moustacheRight .firstRight {
    width: 73px;
    transform: rotate(-8deg);
}

.doraemon .catHead .moustacheRight .secondRight {
    width: 55px;
    transform: rotate(9deg);
}

.doraemon .catHead .moustacheRight .thirdRight {
    width: 71px;
    transform: rotate(15deg);
}

.doraemon .catHead .faceLeft {
    width: 94px;
    height: 142px;
    background: white;
    border: 2px solid black;
    z-index: 2;
    position: absolute;
    top: 64px;
    left: 40px;
    border-right-color: transparent;
    transform: rotate(-13deg);
    border-radius: 1207px 144px 643px 828px;
}

.doraemon .catHead .faceRight {
    width: 114px;
    height: 148px;
    border: 2px solid black;
    background: white;
    z-index: 2;
    position: absolute;
    top: 68px;
    right: 55px;
    border-left-color: transparent;
    transform: rotate(41deg);
    border-radius: 166px 292px 248px 180px;
}

.lowerBody {
    position: relative;
    top: -1000px;
    left: 100px;
}


.lowerBody .neck {
    width: 133px;
    height: 100px;
    border: 10px solid #D21D18;
    border-radius: 1px 1px 50px 53px/ 1px 1px 22px 15px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: -130px;
    left: 14px;
    z-index: 2;
}


.lowerBody .belly {
    width: 200px;
    height: 120px;
    position: absolute;
    top: -41px;
    left: 27px;
    z-index: 1;
    border-radius: 1px;
}

.lowerBody .belly .bellyOut {
    width: 140px;
    height: 100px;
    background: white;
    border: 2px solid black;
    z-index: 2;
    position: absolute;
    top: 9px;
    left: -11px;
    border-radius: 75px 75px 72px 88px/ 49px 49px 61px 58px;
}

.lowerBody .belly .bellyOut::before {
    content: " ";
    width: 20px;
    height: 20px;
    background: #F5E650;
    border: 2px solid black;
    border-radius: 10px;
    position: absolute;
    left: 52px;
}

.lowerBody .belly .bellyOut::after {
    content: " ";
    display: block;
    width: 80px;
    height: 40px;
    border: 2px solid black;
    position: absolute;
    top: 36px;
    left: 23px;
    border-radius: 0 0 42px 44px;
}

.lowerBody .handsLeft {
    width: 50px;
    height: 50px;
    background: white;
    border: 2px solid black;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    top: -4px;
    left: -30px;
}

.lowerBody .handsLeft::before {
    content: " ";
    width: 57px;
    height: 2px;
    background: black;
    display: block;
    transform: rotate(136deg) translate(-12px, 12px);

}

.lowerBody .handsLeft::after {
    content: " ";
    width: 22px;
    height: 2px;
    background: black;
    display: block;
    transform: rotate(113deg) translate(-19px, -33px);
}

.lowerBody .handsRight {
    width: 60px;
    height: 60px;
    background: white;
    border: 2px solid black;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    top: -92px;
    left: 194px;
}

.lowerBody .handsRight::before {
    content: " ";
    display: block;
    width: 54px;
    height: 38px;
    background: #1B94DD;
    border: 2px solid black;
    border-right-color: transparent;
    transform: rotate(114deg) translate(60px, -5px);
    border-radius: 47px 34px 47px 34px/ 15px 15px 15px 15px;
    z-index: -1;
}

.lowerBody .footsLeft {
    width: 70px;
    height: 80px;
    border: 2px solid black;
    background: white;
    position: absolute;
    z-index: 3;
    border-radius: 45px 45px 45px 45px;
    top: 14px;
    left: -8px;
}

.lowerBody .footsRight {
    width: 80px;
    height: 90px;
    border: 2px solid black;
    background: white;
    position: absolute;
    z-index: 3;
    border-radius: 45px 45px 45px 45px;
    top: 19px;
    left: 124px;
}

.lowerBody .footsRightFirst {
    width: 84px;
    height: 50px;
    border: 1px solid black;
    transform: rotate(38deg);
    border-radius: 145px 15px 1px 1px;
    position: absolute;
    top: 69px;
    left: 52px;
    border-right-color: transparent;
    border-bottom-color: transparent;
}

.lowerBody .footsRightLast {
    width: 24px;
    height: 79px;
    border-right: 2px solid black;
    position: absolute;
    top: 10px;
    left: 196px;
    border-radius: 1px 74px 95px 1px;
    z-index: 3;
    transform: rotate(2deg) translate(-4px, 0px);
}

.lowerBody .footsRightLast::before {
    content: " ";
    display: block;
    width: 10px;
    height: 2px;
    background: black;
    position: absolute;
    top: 36px;
    left: 24px;

}

.lowerBody .footsRightLast::after {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid black;
    background: #E51F15;
    box-shadow: inset 0px 0px 1px 1px black;
    position: absolute;
    top: 29px;
    left: 34px;
}

`

export default string