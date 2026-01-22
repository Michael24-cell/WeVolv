import Link from "next/link";

export default function Resources() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Resources
          </h1>
          <p className="text-xl text-teal-100">
            Tools, guides, and information to support your wellness journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Educational Guides</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides on nutrition, fitness, and wellness topics
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Beginner's Guide to Nutrition</li>
                <li>• Understanding Macronutrients</li>
                <li>• Fitness Fundamentals</li>
                <li>• Healthy Eating on a Budget</li>
                <li>• Sleep Optimization Guide</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-3">Meal Plans & Recipes</h3>
              <p className="text-gray-600 mb-4">
                Delicious, healthy recipes and meal planning templates
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Weekly Meal Plan Templates</li>
                <li>• High-Protein Recipes</li>
                <li>• Quick & Easy Meals</li>
                <li>• Meal Prep Strategies</li>
                <li>• Healthy Snack Ideas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-semibold mb-3">Workout Programs</h3>
              <p className="text-gray-600 mb-4">
                Free workout routines for all fitness levels
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Beginner Home Workouts</li>
                <li>• 30-Day Fitness Challenges</li>
                <li>• Strength Training Basics</li>
                <li>• Cardio Workout Plans</li>
                <li>• Stretching & Mobility</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Tracking Tools</h3>
              <p className="text-gray-600 mb-4">
                Downloadable trackers to monitor your progress
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Food & Nutrition Tracker</li>
                <li>• Workout Log Template</li>
                <li>• Progress Measurement Sheet</li>
                <li>• Habit Tracker</li>
                <li>• Goal Setting Worksheet</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-3">Video Library</h3>
              <p className="text-gray-600 mb-4">
                Exercise demonstrations and educational content
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Exercise Form Videos</li>
                <li>• Cooking Demonstrations</li>
                <li>• Wellness Webinars</li>
                <li>• Success Stories</li>
                <li>• Expert Interviews</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Recommended Apps</h3>
              <p className="text-gray-600 mb-4">
                Our favorite apps and tools for health tracking
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Nutrition Tracking Apps</li>
                <li>• Fitness & Workout Apps</li>
                <li>• Meditation & Mindfulness</li>
                <li>• Sleep Tracking Tools</li>
                <li>• Water Intake Reminders</li>
              </ul>
            </div>
          </div>

          {/* Blog Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">January 15, 2026</div>
                <h3 className="text-xl font-semibold mb-2">5 Simple Ways to Boost Your Metabolism</h3>
                <p className="text-gray-600 mb-3">
                  Discover science-backed strategies to naturally increase your metabolic rate and support your weight management goals.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">January 10, 2026</div>
                <h3 className="text-xl font-semibold mb-2">The Truth About Protein: How Much Do You Really Need?</h3>
                <p className="text-gray-600 mb-3">
                  Learn about optimal protein intake for different goals and how to incorporate quality protein sources into your diet.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">January 5, 2026</div>
                <h3 className="text-xl font-semibold mb-2">Building Sustainable Fitness Habits That Last</h3>
                <p className="text-gray-600 mb-3">
                  Stop starting over! Learn how to create fitness habits that stick and become part of your lifestyle.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">December 28, 2025</div>
                <h3 className="text-xl font-semibold mb-2">Meal Prep 101: Save Time and Eat Healthy</h3>
                <p className="text-gray-600 mb-3">
                  Master the art of meal prepping with our step-by-step guide to planning, preparing, and storing healthy meals.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Recommended Reading */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">Recommended Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Nutrition & Diet</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• "How Not to Diet" by Dr. Michael Greger</li>
                  <li>• "The Obesity Code" by Dr. Jason Fung</li>
                  <li>• "Eat to Live" by Dr. Joel Fuhrman</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Fitness & Exercise</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• "Bigger Leaner Stronger" by Michael Matthews</li>
                  <li>• "Body by Science" by Doug McGuff</li>
                  <li>• "Starting Strength" by Mark Rippetoe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mindset & Habits</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• "Atomic Habits" by James Clear</li>
                  <li>• "Mindset" by Carol Dweck</li>
                  <li>• "The Power of Habit" by Charles Duhigg</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
            <p className="text-gray-600 mb-6">
              While these resources are helpful, nothing beats personalized coaching tailored to your unique needs.
            </p>
            <Link
              href="/consultations"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-block"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
