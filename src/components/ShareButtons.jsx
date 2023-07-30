import { useState } from 'react'
import {FacebookShareButton,FacebookIcon,
FacebookMessengerShareButton, FacebookMessengerIcon,
TwitterShareButton,TwitterIcon,
WhatsappShareButton,WhatsappIcon,
LinkedinShareButton,LinkedinIcon,
TelegramShareButton,TelegramIcon,
} from 'react-share'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ShareButtons = ({item}) => {
const [copied,setCopied] = useState(false)
     return (
          <>
          <FacebookShareButton
        url={window.location.href}
        quote={item.quote}
        hashtag="#RandomQuoteMachine"
      >
        <FacebookIcon size={32} borderRadius={20} />
      </FacebookShareButton>
<TwitterShareButton id="tweet-quote"
        url={window.location.href}
        quote={item.quote}
        hashtag="#RandomQuoteMachine"
      >
        <TwitterIcon size={32} borderRadius={20} />
      </TwitterShareButton>
<FacebookMessengerShareButton
        url={window.location.href}
        quote={item.quote}
        hashtag="#RandomQuoteMachine"
      >
        <FacebookMessengerIcon size={32} borderRadius={20} />
      </FacebookMessengerShareButton>
<WhatsappShareButton
        url={window.location.href}
       separator={"-"}
        title={item.quote}
      >
        <WhatsappIcon size={32} borderRadius={20} />
      </WhatsappShareButton>
<LinkedinShareButton
        source={"Random Quote Machine"}
        title={item.quote}
      >
        <LinkedinIcon size={32} borderRadius={20} />
      </LinkedinShareButton>
<TelegramShareButton
        source={"Random Quote Machine"}
        title={item.quote}
      >
        <TelegramIcon size={32} borderRadius={20} />
      </TelegramShareButton>
      <CopyToClipboard id = "copy" text={item.quote}
      onCopy={()=>setCopied(!copied)}>
      <button id = "copybtn">{copied?"Copied":"Copy"}</button>
      </CopyToClipboard>
          </>
          )
}

export default ShareButtons