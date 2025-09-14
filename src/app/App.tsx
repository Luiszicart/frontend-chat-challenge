import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomeTemplate,
  TextChatTemplate,
  VoiceChatTemplate,
} from "../templates";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate />} />
      <Route path="/voice" element={<VoiceChatTemplate />} />
      <Route path="/text" element={<TextChatTemplate />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
