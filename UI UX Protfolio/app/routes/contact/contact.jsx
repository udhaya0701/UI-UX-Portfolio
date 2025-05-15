import { useState, useRef, useEffect } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Send me a message if you are interested in discussing a project',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

export const Contact = () => {
  const formRef = useRef();
  const errorRef = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('initial'); // Manage data-status state

  useEffect(() => {
    emailjs.init('flebH8D1Wba0ncswt'); // Replace with your public key
  }, []);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('entering');
      // Transition to 'entered' after the animation duration
      setTimeout(() => setStatus('entered'), 600); // Match --durationXL (e.g., 600ms)
    }, 100); // Small delay to ensure DOM is ready
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) {
      setSubmitError('Form reference is invalid.');
      setIsSending(false);
      return;
    }
    setIsSending(true);
    setSubmitError(null);

    try {
      const result = await emailjs.sendForm(
        'service_2um2295',
        'template_3knycs5',
        formRef.current,
        'flebH8D1Wba0ncswt'
      );
      console.log('Email sent successfully:', result);
      setSubmitSuccess(true);
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitError(
        error.text || error.message || 'Failed to send message. Please try again.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section className={styles.contact}>
      {!submitSuccess ? (
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <Heading
            className={styles.title}
            level={3}
            as="h1"
            data-status={status}
          >
            <DecoderText text="Say hello" start delay={300} />
          </Heading>
          <Divider className={styles.divider} data-status={status} />
          <Input
            className={styles.botkiller}
            label="Name"
            name="name"
            maxLength={MAX_EMAIL_LENGTH}
          />
          <Input
            required
            className={styles.input}
            autoComplete="email"
            label="Your email"
            type="email"
            name="email"
            maxLength={MAX_EMAIL_LENGTH}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-status={status}
          />
          <Input
            required
            multiline
            className={styles.input}
            autoComplete="off"
            label="Message"
            name="message"
            maxLength={MAX_MESSAGE_LENGTH}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            data-status={status}
          />
          {submitError && (
            <div className={styles.formError}>
              <div className={styles.formErrorContent} ref={errorRef}>
                <div className={styles.formErrorMessage}>
                  <Icon className={styles.formErrorIcon} icon="error" />
                  {submitError}
                </div>
              </div>
            </div>
          )}
          <Button
            className={styles.button}
            disabled={isSending}
            loading={isSending}
            loadingText="Sending..."
            icon="send"
            type="submit"
            data-status={status}
          >
            Send message
          </Button>
        </form>
      ) : (
        <div className={styles.complete} aria-live="polite">
          <Heading
            level={3}
            as="h3"
            className={styles.completeTitle}
            data-status={status}
          >
            Message Sent
          </Heading>
          <Text
            size="l"
            as="p"
            className={styles.completeText}
            data-status={status}
          >
            I'll get back to you soon
          </Text>
          <Button
            secondary
            iconHoverShift
            className={styles.completeButton}
            onClick={() => {
              setSubmitSuccess(false);
              setStatus('initial');
              setTimeout(() => setStatus('entering'), 100);
              setTimeout(() => setStatus('entered'), 700);
            }}
            icon="chevron-right"
            data-status={status}
          >
            Send another message
          </Button>
        </div>
      )}
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}