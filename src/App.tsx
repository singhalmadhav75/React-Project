import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './Counter.tsx';
import UserDataForm from './UserDataForm.tsx';
import RichTextEditor from './RichTextEditor.tsx';
// import Dashboard from './Dashboard.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/user-data-form" element={<UserDataForm />} />
        <Route path="/rich-text-editor" element={<RichTextEditor />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
