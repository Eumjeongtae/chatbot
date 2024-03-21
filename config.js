import { createChatBotMessage } from 'react-chatbot-kit';
import Buttons from './Buttons';
import { getUser } from '../util/localStorage';
import MoreButton from './MoreButton';

const userInfo = getUser() ? getUser().userInfo : '';
const botName = '책박사';
const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(<span>안녕하세요 책박사입니다. 무엇을 도와드릴까요</span>, {
            withAvatar: true,
            delay: 500,
            widget: 'firstButtons',
        }),
    ],
    widgets: [
        { widgetName: 'bookName', widgetFunc: () => {} },
        {
            widgetName: 'firstButtons',
            widgetFunc: (props) => <Buttons {...props} />,
            props: {
                buttons: [
                    {
                        text: (
                            <span>
                                bookbooking 사이트에 <br />
                                대해 설명해줘!
                            </span>
                        ),
                        action: 'accountBookbooking',
                    },
                    { text: <span>책검색 하고싶어</span>, action: 'bookName' },
                    { text: <span>신간도서 알려줘</span>, action: 'newBook' },
                    { text: <span>책 대여 순위 알려줘</span>, action: 'rentRanking' },
                    { text: <span>책 좋아요 순위 알려줘</span>, action: 'likeRanking' },
                    { text: <span>상담원과 연결</span>, action: `joinChatRoom` },
                ],
            },
        },
        {
            widgetName: 'showMore',
            widgetFunc: (props) => <MoreButton {...props} />,
            props: {
                buttons: [{ text: '또 다른 정보가 필요하신가요?', action: 'moreInfo' }],
            },
        },
    ],
};

export default config;
