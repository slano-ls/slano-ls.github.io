import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>

   <Text className={styles.description} data-visible={visible} size="l" as="p">
  Hello, my name is Saihaj Law, and its great to meet you!
    </Text>
   <Text className={styles.description} data-visible={visible} size="l" as="p">
  If you are checking out this website, thats awesome; this is the place I like to call my **digital garden**. On here, I talk about all of my major ideas and discuss topics which I am currently focused on. I have a projects section in which I highlight some of the bigger projects which Im working on, so feel free to take a look!
  </Text>
   <Text className={styles.description} data-visible={visible} size="l" as="p">
  A bit more about myself...
  Im currently a 17 year old High School student, and I love mathematics and programming (as many do). Outside of that, I am a frequent athlete and also a pianist who plays whenever the occasion arises. I love programming **low-level** code, primarily in C and working on different algorithm optimization as it couples my interest in mathematics and programming in an interesting way. Ive made a full suite of low-level code, including a **Programming Language (SLLANG) & Compiler (SCC)**. Ive also recreated my own version of many basic *Linux* terminal commands (top, cat, grep etc.). 
  </Text>
   <Text className={styles.description} data-visible={visible} size="l" as="p">
  Currently, I am researching Keyboard Layout Optimization through QUANTUM COMPUTING, something which Ive never delved into before, but its been very interesting!
  </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to play soccer, and play piano as well
  </Text>

  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
