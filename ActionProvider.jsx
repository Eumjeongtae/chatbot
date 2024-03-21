import axios from 'axios';
import BookInfo from './BookInfo';
// import { getUser } from '../util/localStorage';
// import io from 'socket.io-client';

// const userInfo = getUser() ? getUser().userInfo : '';
// const SERVER_URL = 'http://localhost:8000';
// const socket = io(SERVER_URL);

// ActionProvider.js
class ActionProvider {

  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;

  }

  joinChatRoom = () => {
    const message = this.createChatBotMessage(<span>준비중인 기능입니다. </span>, { widget: 'showMore' });
    this.updateChatbotState(message);
    // socket.emit('registerUser', userInfo.id);
  }
  moreInfo = () => {
    const message = this.createChatBotMessage(<span>어떤걸 도와드릴 까요? </span>, {
      widget: "firstButtons",
    });

    this.updateChatbotState(message);
  };


  hello = () => {
    const message = this.createChatBotMessage(<span>안녕하세요 저는 책박사입니다. <br /> 무엇을 도와드릴까요?</span>, {
      widget: "firstButtons",
    });

    this.updateChatbotState(message);
  }
  findBook = async (book) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}chatbot/book_name`, { book_name: book });
      const bookData = response.data;

      let messageContent;

      if (bookData.length) {
        const bookMessages = bookData.map(book => (
          <BookInfo bookData={book} />
        ));

        // 여기서 추가 메시지를 배열에 추가합니다.
        // bookMessages.push(
        //   <span>또 다른 필요하신 정보가 있으신가요?.</span>
        // );

        messageContent = bookMessages;
      } else {
        messageContent = <span>해당 책의 정보를 찾을 수 없습니다.</span>;
      }

      const message = this.createChatBotMessage(messageContent,
        { widget: "showMore" });
      // const message = this.createChatBotMessage(messageContent, {
      //   widget: "firstButtons",
      // });

      this.updateChatbotState(message);

    } catch (error) {
      // 에러 처리
      const errorMessage = this.createChatBotMessage("죄송합니다, 책 정보를 불러오는 데 실패했습니다.",
        { widget: "firstButtons" });
      this.updateChatbotState(errorMessage);
    }
  };

  accountBookbooking = () => {
    const message = this.createChatBotMessage(
      <span>
        책 대여와 예약이 가능한 사이트로,<br />
        <br /> 사용자 선호에 따른 좋아요와 대여 순위를 한눈에 볼 수 있습니다. <br />
        <br />취향에 맞는 책을 쉽게 찾아보세요!
      </span>,
      { widget: "showMore" })

    this.updateChatbotState(message);
  };

  bookName = () => {
    const message = this.createChatBotMessage(<span>
      책 이름을 알려주세요
    </span>,
      { widget: "bookName" });
    this.updateChatbotState(message);
  };

  likeRanking = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}main`);
      const bookData = response.data.likeCounts.slice(0, 4);

      let messageContent;

      if (bookData.length) {
        const bookMessages = bookData.map(book => (
          <BookInfo bookData={book} />
        ));

        // 여기서 추가 메시지를 배열에 추가합니다.
        bookMessages.unshift(
          <span>좋아요 랭킹의 정보 입니다.</span>
        );


        messageContent = bookMessages;
      } else {
        messageContent = <span>해당 책의 정보를 찾을 수 없습니다.</span>;
      }

      const message = this.createChatBotMessage(messageContent, { widget: 'showMore' });

      this.updateChatbotState(message);
    } catch (error) {
      // 에러 처리
      const errorMessage = this.createChatBotMessage("죄송합니다, 책 정보를 불러오는 데 실패했습니다.",
        { widget: "showMore" });
      this.updateChatbotState(errorMessage);
    }
  };
  rentRanking = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}main`);
      const bookData = response.data.rentCounts.slice(0, 4);

      let messageContent;

      if (bookData.length) {
        const bookMessages = bookData.map(book => (
          <BookInfo bookData={book} />
        ));

        // 여기서 추가 메시지를 배열에 추가합니다.
        bookMessages.unshift(
          <span>대여횟수 랭킹의 정보 입니다.</span>
        );


        messageContent = bookMessages;
      } else {
        messageContent = <span>해당 책의 정보를 찾을 수 없습니다.</span>;
      }

      const message = this.createChatBotMessage(messageContent, { widget: 'showMore' });

      this.updateChatbotState(message);
    } catch (error) {
      // 에러 처리
      const errorMessage = this.createChatBotMessage("죄송합니다, 책 정보를 불러오는 데 실패했습니다.",
        { widget: "firstButtons" });
      this.updateChatbotState(errorMessage);
    }
  };
  newBook = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}main`);
      const bookData = response.data.newBooks.slice(0, 4);

      let messageContent;

      if (bookData.length) {
        const bookMessages = bookData.map(book => (
          <BookInfo bookData={book} />
        ));

        // 여기서 추가 메시지를 배열에 추가합니다.
        bookMessages.unshift(
          <span>신간도서의 정보 입니다.</span>
        );


        messageContent = bookMessages;
      } else {
        messageContent = <span>해당 책의 정보를 찾을 수 없습니다.</span>;
      }

      const message = this.createChatBotMessage(messageContent, { widget: 'showMore' });

      this.updateChatbotState(message);
    } catch (error) {
      // 에러 처리
      const errorMessage = this.createChatBotMessage("죄송합니다, 책 정보를 불러오는 데 실패했습니다.", { widget: 'showMore' });
      this.updateChatbotState(errorMessage);
    }
  };
  // bookName = () => {
  //   const message = this.createChatBotMessage("옵션 2에 대한 반응입니다.", { widget: "secondButtons" });
  //   this.updateChatbotState(message);
  // };
  // showNewOptionA = () => {
  //   const message = this.createChatBotMessage("새로운 옵션 A를 선택하셨습니다.");
  //   this.updateChatbotState(message);
  // };

  // showNewOptionB = () => {
  //   const message = this.createChatBotMessage("새로운 옵션 B를 선택하셨습니다.");
  //   this.updateChatbotState(message);
  // };

  unKnown = () => {
    // console.log(userInfo?.id);
    // socket.emit('sendMessage', { senderId: userInfo?.id, receiverId: 'admin', message: message });
    // socket.emit('sendMessageToAdmin', { userInfo, message , chatroom:userInfo.id});

    const message = this.createChatBotMessage(
      <span>
        죄송합니다 무슨 말씀이신지 잘 모르겠습니다.
      </span>, { widget: 'showMore' })

    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
