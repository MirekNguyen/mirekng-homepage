import { motion } from 'framer-motion';
import Aurora from '../components/reactbits/Aurora';
import StarBorder from '../components/reactbits/StarBorder';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Home = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#060608',
      }}
    >
      {/* Aurora background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Aurora
          colorStops={['#3b0f6e', '#6d28d9', '#1d4ed8']}
          amplitude={1.4}
          blend={0.65}
          speed={0.6}
        />
      </div>

      {/* Subtle dark overlay so text stays readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(6,6,8,0.35) 0%, rgba(6,6,8,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          padding: '2rem',
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <motion.p
          {...fadeUp(0)}
          style={{
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '1.25rem',
          }}
        >
          Coming Soon
        </motion.p>

        <motion.h1
          {...fadeUp(0.12)}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1rem',
            maxWidth: '680px',
          }}
        >
          A new website is being worked on.
        </motion.h1>

        <motion.p
          {...fadeUp(0.24)}
          style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '2.75rem',
            maxWidth: '420px',
            lineHeight: 1.6,
          }}
        >
          Check back soon.
        </motion.p>

        <motion.div {...fadeUp(0.38)}>
          <StarBorder
            as="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            color="#a78bfa"
            speed="4s"
            thickness={1}
          >
            Demo
          </StarBorder>
        </motion.div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => page;

export default Home;
