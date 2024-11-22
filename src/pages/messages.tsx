import Messages from "@components/Messages";
import {reactionContentTypeConfig, XMTPProvider} from "@xmtp/react-sdk";
import {useProfileStore} from "src/store/persisted/useProfileStore";
import {GridItemEight, GridLayout} from "@lcm/ui";
import Hero from "@components/Home/Hero";

const contentTypeConfigs = [reactionContentTypeConfig];

const XMTPMessages = () => {
    const {currentProfile} = useProfileStore();

    if (!currentProfile) {
        // return <Custom404 />;
        return (<GridLayout className={"content-center"}>
            <GridItemEight>
                <Hero />
            </GridItemEight>
        </GridLayout>);
    }

    return (
        <XMTPProvider contentTypeConfigs={contentTypeConfigs}>
            <Messages/>
        </XMTPProvider>
    );
};

export default XMTPMessages;
