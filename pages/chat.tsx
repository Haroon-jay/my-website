import { Container, Text, Title } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, MessageCircle, X } from "lucide-react";
import { useRef, useState } from "react";
import styled from "styled-components";

const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  margin-right: 8px;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 4px;
`;

const LoadingDot = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: black;
  border-radius: 50%;
`;

const ChatIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

// ===========================================
// FLOATING CHAT WIDGET
// ===========================================

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
`;

const ChatButton = styled(motion.button)`
  background: black;
  color: white;
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    transform: scale(1.05);
  }

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  right: 100%;
  margin-right: 8px;
  background: black;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
`;

const ChatWindow = styled(motion.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  border: 1px solid #e2e8f0;
  width: 450px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
  height: ${(props: any) => (props.isMinimized ? "50px" : "580px")};

  @media (max-width: 600px) {
    max-width: 320px;
  }
`;

const ChatHeader = styled.div`
  background: black;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

const HeaderTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ChatContent = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  height: ${(props: any) => (props.isMinimized ? "0" : "420px")};
  transition: height 0.3s ease;
` as any;

const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  z-index: 10;
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const SuggestedQuestions = styled(motion.div)`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 12px;
  border: 1px solid #e2e8f0;
`;

const SuggestionItem = styled.div`
  font-size: 11px;
  color: #374151;
  padding: 4px;
  background: #f8fafc;
  border-radius: 4px;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FloatingChatWidget = ({
  huggingFaceSpaceUrl = "https://haroon-jay-career-conversations.hf.space/",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setIsMinimized(false);
  };

  const suggestedQuestions = [
    "What technologies does Haroon work with?",
    "Tell me about Haroon's AI experience",
  ];

  const loadingDotVariants = {
    animate: {
      y: [0, -8, 0],
    },
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
    },
  } as any;

  return (
    <FloatingContainer>
      <AnimatePresence>
        {!isOpen && (
          <ChatButton
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            <Tooltip className="tooltip">Chat with Haroon's AI</Tooltip>
          </ChatButton>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChatHeader>
              <div style={{ display: "flex", alignItems: "center" }}>
                <StatusIndicator />
                <HeaderTitle>Chat with Haroon</HeaderTitle>
              </div>
              <HeaderActions>
                <ActionButton
                  onClick={() => window.open(huggingFaceSpaceUrl, "_blank")}
                  title="Open in new tab"
                >
                  <ExternalLink size={16} />
                </ActionButton>
                {/* <ActionButton onClick={() => setIsMinimized(!isMinimized)}>
                  {isMinimized ? (
                    <Maximize2 size={16} />
                  ) : (
                    <Minimize2 size={16} />
                  )}
                </ActionButton> */}
                <ActionButton onClick={() => setIsOpen(false)}>
                  <X size={16} />
                </ActionButton>
              </HeaderActions>
            </ChatHeader>

            <ChatContent isMinimized={isMinimized}>
              <AnimatePresence>
                {isLoading && !isMinimized && (
                  <LoadingOverlay
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <LoadingContent>
                      <LoadingDots>
                        <LoadingDot
                          variants={loadingDotVariants}
                          animate="animate"
                        />
                        <LoadingDot
                          variants={loadingDotVariants}
                          animate="animate"
                          transition={{ delay: 0.1 }}
                        />
                        <LoadingDot
                          variants={loadingDotVariants}
                          animate="animate"
                          transition={{ delay: 0.2 }}
                        />
                      </LoadingDots>
                      <Text fontSize="14px" color="#6b7280">
                        Loading AI Assistant...
                      </Text>
                    </LoadingContent>
                  </LoadingOverlay>
                )}
              </AnimatePresence>

              {!isMinimized && (
                <ChatIframe
                  ref={iframeRef}
                  src={`${huggingFaceSpaceUrl}?embed=true`}
                  onLoad={handleIframeLoad}
                  title="Haroon's AI Assistant"
                />
              )}

              <AnimatePresence>
                {isLoading && !isMinimized && (
                  <SuggestedQuestions
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Text fontSize="12px" color="#6b7280" marginBottom="8px">
                      While loading, here are some questions you can ask:
                    </Text>
                    {suggestedQuestions.map((question, index) => (
                      <SuggestionItem key={index}>• {question}</SuggestionItem>
                    ))}
                  </SuggestedQuestions>
                )}
              </AnimatePresence>
            </ChatContent>
          </ChatWindow>
        )}
      </AnimatePresence>
    </FloatingContainer>
  );
};

// ===========================================
// DEDICATED CHAT PAGE
// ===========================================

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;

const HeaderSection = styled.div`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e8f0;
`;

const ChatPageContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ChatPageContent = styled.div`
  position: relative;
  height: 600px;
`;

const ChatPageLoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  z-index: 10;
`;

const ChatPageLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SuggestedQuestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;
`;

const QuestionCard = styled(motion.div)`
  padding: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`;

const DedicatedChatPage = ({
  huggingFaceSpaceUrl = "https://haroon-jay-career-conversations.hf.space/",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    console.log("Iframe loaded");
    setIsLoading(false);
  };

  const suggestedQuestions = [
    "What technologies does Haroon work with?",
    "Tell me about Haroon's AI experience",
    "What kind of projects has Haroon built?",
    "How can I contact Haroon?",
    "What's Haroon's experience with AI/ML?",
    "Tell me about Haroon's full-stack development skills",
  ];

  const loadingDotVariants = {
    animate: {
      y: [0, -12, 0],
    },
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "loop",
    },
  } as any;

  return (
    <PageContainer>
      {/* Header */}
      <HeaderSection>
        <Container maxWidth="1200px" paddingY="2rem" textAlign="center">
          <Title fontSize="2.5rem" marginBottom="1rem">
            Chat with Haroon's AI Assistant
          </Title>
          <Text color="#6b7280" margin="0 auto">
            I'm an AI assistant trained on Haroon's professional background. Ask
            me anything about his experience as a Senior Full Stack Engineer and
            AI Applications Developer, his projects, skills, or how to get in
            touch!
          </Text>
        </Container>
      </HeaderSection>

      {/* Main Content */}
      <Container maxWidth="1200px" paddingY="2rem" gridGap="2rem">
        <ChatPageContainer>
          <ChatPageContent>
            <AnimatePresence>
              {isLoading && (
                <ChatPageLoadingOverlay
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ChatPageLoadingContent>
                    <LoadingDots>
                      <LoadingDot
                        variants={loadingDotVariants}
                        animate="animate"
                        style={{ width: "16px", height: "16px" }}
                      />
                      <LoadingDot
                        variants={loadingDotVariants}
                        animate="animate"
                        transition={{ delay: 0.1 }}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <LoadingDot
                        variants={loadingDotVariants}
                        animate="animate"
                        transition={{ delay: 0.2 }}
                        style={{ width: "16px", height: "16px" }}
                      />
                    </LoadingDots>
                    <Title fontSize="1.25rem" color="#374151">
                      Loading AI Assistant...
                    </Title>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <StatusIndicator />
                      <Text fontSize="14px" color="#6b7280">
                        Connecting to Haroon's AI
                      </Text>
                    </div>
                  </ChatPageLoadingContent>
                </ChatPageLoadingOverlay>
              )}
            </AnimatePresence>

            <ChatIframe
              ref={iframeRef}
              src={`${huggingFaceSpaceUrl}?embed=true`}
              onLoad={handleIframeLoad}
              title="Haroon's AI Assistant - Full Experience"
            />
          </ChatPageContent>
        </ChatPageContainer>

        {/* Suggested Questions */}
        <Container gridGap="1.5rem">
          <Title fontSize="1.5rem" textAlign="center">
            Not sure what to ask? Try these questions:
          </Title>
          <SuggestedQuestionsGrid>
            {suggestedQuestions.map((question, index) => (
              <QuestionCard
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "black",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  <Text fontSize="14px" color="#374151">
                    {question}
                  </Text>
                </div>
              </QuestionCard>
            ))}
          </SuggestedQuestionsGrid>
        </Container>

        {/* Info Section */}
        {/* <InfoSection>
          <Grid
            gridTemplateColumns={["1fr", "2fr 1fr"]}
            gridGap="2rem"
            alignItems="center"
          >
            <div>
              <Title fontSize="1.5rem" color="white" marginBottom="1rem">
                About This AI Assistant
              </Title>
              <Text color="#d1d5db">
                This AI assistant has been trained on Haroon's LinkedIn profile,
                work experience, and professional background. It can provide
                detailed information about his skills, projects, and how to
                connect with him.
              </Text>
            </div>
            <InfoActions>
              <InfoButton
                onClick={() => window.open(huggingFaceSpaceUrl, "_blank")}
              >
                <ExternalLink size={16} />
                Open Full Screen
              </InfoButton>
              <InfoButton
                onClick={() =>
                  window.open("mailto:haroonjawad6@gmail.com", "_blank")
                }
              >
                Contact Haroon
              </InfoButton>
            </InfoActions>
          </Grid>
        </InfoSection> */}
      </Container>
    </PageContainer>
  );
};

// ===========================================
// DEMO PAGE USING BOTH COMPONENTS
// ===========================================

// ===========================================
// EXPORTS
// ===========================================

export { DedicatedChatPage, FloatingChatWidget };
export default DedicatedChatPage;
