import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { formatDate } from '../utils/formatters';

export const ReviewSection = ({ initialReviews }) => {
  const { user, isAuthenticated } = useAuth();
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ rating: 5, text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.text.trim() || !isAuthenticated) return;

    const review = {
      id: Date.now(),
      user: user.username,
      rating: newReview.rating,
      date: new Date().toISOString(),
      text: newReview.text
    };

    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, text: '' });
  };

  const StarRating = ({ rating, interactive = false, onRate }) => {
    return (
      <div className="flex text-luxury-gold">
        {[1, 2, 3, 4, 5].map(star => (
          <button 
            key={star} 
            type={interactive ? "button" : "button"}
            disabled={!interactive}
            onClick={() => interactive && onRate(star)}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'} ${star <= rating ? 'text-luxury-gold' : 'text-gray-600'}`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-12">
      <h3 className="font-serif text-2xl text-white mb-6 border-b border-white/10 pb-2">Reviews</h3>
      
      {isAuthenticated ? (
        <form onSubmit={handleSubmit} className="glass-panel p-6 mb-8">
          <h4 className="font-medium text-gray-200 mb-4">Write a Review</h4>
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2">Your Rating</label>
            <StarRating 
              rating={newReview.rating} 
              interactive={true} 
              onRate={(r) => setNewReview({...newReview, rating: r})} 
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full bg-luxury-dark border border-luxury-glass-border rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors resize-none h-24"
              placeholder="What are your thoughts on this fragrance?"
              value={newReview.text}
              onChange={(e) => setNewReview({...newReview, text: e.target.value})}
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={!newReview.text.trim()}
            className="px-6 py-2 bg-luxury-gold text-luxury-dark font-medium rounded-lg hover:bg-luxury-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post Review
          </button>
        </form>
      ) : (
        <div className="glass-panel p-6 mb-8 text-center text-gray-400">
          Please <span className="text-luxury-gold cursor-pointer">log in</span> to write a review.
        </div>
      )}

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500 italic">No reviews yet. Be the first!</p>
        ) : (
          reviews.map(review => (
            <div key={review.id} className="glass-panel p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-luxury-dark to-gray-800 border border-luxury-gold/30 flex items-center justify-center font-serif text-luxury-gold font-bold">
                    {review.user.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-gray-200">{review.user}</div>
                    <div className="text-xs text-gray-500">{formatDate(review.date)}</div>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
