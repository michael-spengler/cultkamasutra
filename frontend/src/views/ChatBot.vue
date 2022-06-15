<template>
  <div class="view-chatbot">
    <SKHeader rootRoute="chatbot" title="The Coach" :trigger="0" />
    <div content center max-width>
      <h1>{{ $getText('ui.chat.title', 'The Coach') }}</h1>
      <p>
        {{ $getText('ui.chat.subtitle') }}
      </p>
    </div>

    <div max-width>
      <transition-group name="chat" tag="div" class="chat-window">
        <tl-flow
          class="chat-message"
          v-for="m in chatMessages"
          :key="m._id"
          :horizontal="m.received ? 'start' : 'end'"
        >
          <tc-avatar v-if="m.received" size="tiny" src="/assets/coach.svg" />
          <div
            class="message"
            :class="{ dark: $store.getters.darkmode }"
            v-if="m.content"
          >
            {{ m.content }}
          </div>
          <div
            class="message"
            :class="{ dark: $store.getters.darkmode }"
            v-if="m.ids"
          >
            I recommend the following positions
            <tc-divider :dark="$store.getters.darkmode" />
            <tc-segments :dark="$store.getters.darkmode">
              <tc-segment-item title="Men">
                <SKCarousel>
                  <SKPosition
                    v-for="i in m.ids[0]"
                    :key="i + m._id"
                    :position="$store.getters.positionById(i)"
                  />
                </SKCarousel>
              </tc-segment-item>
              <tc-segment-item title="Women">
                <SKCarousel>
                  <SKPosition
                    v-for="i in m.ids[1]"
                    :key="i + m._id"
                    :position="$store.getters.positionById(i)"
                  />
                </SKCarousel>
              </tc-segment-item>
            </tc-segments>
          </div>
          <tc-avatar
            v-if="!m.received && $store.getters.valid"
            size="tiny"
            :src="$store.getters.user.avatar"
          />
        </tl-flow>
      </transition-group>
    </div>
    <div class="send-message" :class="{ dark: $store.getters.darkmode }">
      <div class="grid" max-width>
        <form @submit.prevent="sendMessage()">
          <tc-input
            pattern="*"
            :placeholder="$getText('ui.chat.placeholder', 'Enter your message')"
            v-model="messageInput"
            :dark="$store.getters.darkmode"
          />
        </form>
        <tc-button icon="reply" variant="filled" @click="sendMessage()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SKCarousel from '@/components/SK-Carousel.vue';
import SKHeader from '@/components/SK-Header.vue';
import SKPosition from '@/components/SK-Position.vue';
import axios from '@/utils/axios';
import { IChatMessage } from '@/utils/interfaces';
import { Position } from '@/utils/models';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    SKHeader,
    SKCarousel,
    SKPosition,
  },
})
export default class ChatBot extends Vue {
  public chatMessages: IChatMessage[] = [];
  public messageInput = '';

  mounted() {
    this.sendMessage('Hi');
    this.chatMessages = [];
    // this.sendMessage('Po');
  }

  public sendMessage(msg: string = this.messageInput): void {
    if (msg.length === 0) return;

    this.chatMessages.push({
      content: msg,
      received: false,
      _id: new Date().getTime(),
    });

    // const message = encodeURI(msg);
    // fetch(
    //   `https://digiassistant.org/nlp/getResponseComplete/key/123/botName/sportkamasutra_bot/input/${message}/languageCode/de`
    // )
    //   .then(res => res.json())
    //   .then(async data => {
    //     const message: IChatMessage = {
    //       received: true,
    //       _id: new Date().getTime()
    //     };
    //     const { answer, intent } = data;
    //     if (answer) {
    //       this.chatMessages.push({ ...message, content: answer });
    //     } else if (intent && intent.startsWith('train.')) {
    //       const muscle = encodeURI(intent.split('.')[1]);
    //       const pso = { type: 'query', input: muscle };

    //       const idsMen = (await axios.post(`position/search/men`, pso)).data;
    //       const idsWomen = (await axios.post(`position/search/women`, pso))
    //         .data;

    //       message.ids = [
    //         idsMen.map((x: Position) => x._id),
    //         idsWomen.map((x: Position) => x._id)
    //       ];

    //       this.chatMessages.push(message);
    //     } else {
    //       this.chatMessages.push({
    //         ...message,
    //         content:
    //           'I did not understand that. If you need more instructions, please enter "more help".'
    //       });
    //     }

    //     setTimeout(() => {
    //       window.scrollTo({
    //         top: document.body.scrollHeight + 50
    //       });
    //     }, 100);
    //   });

    // const messageFromUser = encodeURI(msg);

    const messageFromUser: IChatMessage = {
      received: true,
      _id: new Date().getTime(),
    };

    const messageFromSportkamasutraCoach = `I'm reading the CULT manifesto. I invite you to consider exploring the cultdao.io & https://cultdao-ecosystem.eth.limo.`;

    this.chatMessages.push({
      ...messageFromUser,
      content: messageFromSportkamasutraCoach,
    });
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight + 50,
      });
    }, 100);

    this.messageInput = '';
  }
}
</script>

<style lang="scss" scoped>
[content] {
  padding-top: calc(20px + env(safe-area-inset-top));
  padding-bottom: 0;
}

.view-chatbot {
  min-height: 100vh;

  .send-message {
    @include backdrop-blur($paragraph);
    &.dark {
      @include backdrop-blur($paragraph_dark);
    }

    position: fixed;
    bottom: calc(50px + env(safe-area-inset-bottom));
    left: 0;
    right: 0;
    padding: 0 5vw;
    height: 50px;
    display: flex;
    .grid {
      display: grid;
      grid-template-columns: minmax(0px, 1fr) auto;
      place-content: center;
      flex-grow: 1;
    }
  }

  .chat-window {
    max-width: 90vw;
    margin: 0 5vw;
    padding-bottom: calc(100px + env(safe-area-inset-bottom));

    .chat-message {
      margin-bottom: 10px;
      flex-wrap: nowrap;
      align-items: start;
      .tc-avatar {
        min-width: 50px;
        position: sticky;
        top: calc(60px + env(safe-area-inset-top));
      }
      .tc-avatar ~ .message {
        margin-left: 10px;
        background: $color;
        color: #fff;
      }
      .message ~ .tc-avatar {
        margin-left: 10px;
      }
      .message {
        font-size: 16px;
        background: $paragraph;
        &.dark {
          @include backdrop-blur($container_dark);
        }
        padding: 10px;
        border-radius: $border-radius;
        display: grid;
        place-content: center;

        .sk-carousel {
          & > *:first-child {
            margin-left: 0;
          }
          margin: 0;
          /deep/ .sk-carousel__spacer {
            display: none;
          }
        }
      }
    }
  }

  .chat-enter-active {
    transition: all 1s;
  }
  .chat-enter {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>
