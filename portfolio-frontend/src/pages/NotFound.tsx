import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--color-bg)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center px-4"
      >
        <motion.p
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-8xl mb-6"
        >
          🔭
        </motion.p>
        <h1 className="text-6xl font-bold gradient-text mb-3">404</h1>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Page Not Found</h2>
        <p className="text-sm mb-8 max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => navigate(-1)} className="btn-outline">
            <ArrowLeft size={15} /> Go Back
          </button>
          <button onClick={() => navigate('/')} className="btn-primary">
            <Home size={15} /> Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
