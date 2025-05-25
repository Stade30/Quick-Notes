import react from "react";
import { Link } from "react-router-dom";
import { Notebook, CheckCircle, Zap, Lock } from "lucide-react";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Notebook className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 max-w-2xl mx-auto, mb-8">
            Capture your ideas with QuickNotes
          </h1>   
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A simple, fast and secure way to keep track of your thought, ideas
            and important information
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-5 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <Zap className="h-6 w-6 text-blue-600 " />
            <h3 className="text-lg font-semibold text-gray-900">
              Lighting Fast
            </h3>
          </div>
          <p className="text-gray-600 mt-2">
            QuickNotes is designed to be fast and responsive, allowing you to
            capture access your thoughts instantly with real-time sync
            technology.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <Lock className="h-6 w-6 text-blue-600 " />
            <h3 className="text-lg font-semibold text-gray-900">
              Secure & Private
            </h3>
          </div>
          <p className="text-gray-600 mt-2">
            Your notes are encrypted and stored securely, ensuring that your
            personal information remains private and protected at all times with
            enterprise-grade security and encryption.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <CheckCircle className="h-6 w-6 text-blue-600 " />
            <h3 className="text-lg font-semibold text-gray-900">Easy to Use</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Clean nad intuitive interface that makes it easy to create, edit,
            and lets you focus on what matters most - your ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
