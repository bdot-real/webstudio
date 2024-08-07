const jwt = require('jsonwebtoken');

// Replace with your actual secret and token
const secret = 'jwtsecretjwtsecretjwtsecretjwtsecretjwtsecretjwtsecretjwtsecretjwtsecretjwtsecretjwtsecretjwtsecretjwtsecret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZHBpeHpvcWlpcmJtcGRpcHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMzY0MjgsImV4cCI6MTk4MTkxMjQyOH0.jjeYvTDrWP9pV7dfZr6fptualNQ3aR13kuPhvT25Sso';

try {
  const decoded = jwt.verify(token, secret);
  console.log('Decoded JWT:', decoded);
} catch (err) {
  console.error('JWT verification failed:', err.message);
}
