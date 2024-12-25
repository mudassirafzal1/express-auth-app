const AuthService = require('../services/authService');

const register = async (req, res) => {
  console.log('register', req.body);
  try {
    const result = await AuthService.register(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tokens = await AuthService.login(email, password);
    res.json(tokens);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const accessToken = await AuthService.refreshToken(refreshToken);
    res.json({ accessToken });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { register, login, refreshToken, getMe };
