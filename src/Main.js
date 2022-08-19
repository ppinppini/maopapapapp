import styled from "@emotion/styled";

function Main({ setPhase }) {
  const onButtonClick = () => {
    window.location.replace("http://localhost:3000/map");
  };
  return (
    <Container>
      <H1 id="font">여행을 떠나자 🛫</H1>
      {/* <Link to="/second"> */}
      <Button onClick={onButtonClick}>Let's go</Button>
      {/* </Link> */}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh; // 높이
  background-color: #ccf2f4; // 배경 색
  color: black; // 글자 색
  text-align: center; // 텍스트 정렬
  display: flex; // flex 공부하세요
  gap: 200px; // ..
  flex-direction: column; // ..
  justify-content: center; // 중앙 정렬 1
  align-items: center; // 중앙 정렬 2
  font-family: "GangwonEdu_OTFBoldA"; // 폰트 종류
`;

const H1 = styled.h1`
  margin: 0; // 주변 마진
  font-size: 50px;
`;

const Button = styled.button`
  all: unset; // 초기화
  background-color: #aaaaaa;
  width: 200px;
  height: 50px;
  border-radius: 25px; // 모서리 곡률

  cursor: pointer; // 커서 변경

  &:hover {
    // 마우스가 요소 위에 올라갔을 때
    transform: scale(1.1); // 전체 비율 1.1배
    background-color: #fff;
    color: #ffc952;
  }
`;

export default Main;

//ff7473 빨
//ffc952 노
//47b8e0 파
//34314c 회
