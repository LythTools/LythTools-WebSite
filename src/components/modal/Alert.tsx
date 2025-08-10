import React from 'react'
import './Alert.css'

interface AlertProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  emoji: string
  buttonText?: string
  glowColor?: string
}

export function Alert({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  emoji,
  buttonText = "知道了",
  glowColor = "rgba(255, 165, 0, 0.3)"
}: AlertProps) {
  if (!isOpen) return null

  return (
    <div className="alert-overlay" onClick={onClose}>
      <div className="alert-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="alert-close-btn" 
          onClick={onClose}
          aria-label="关闭弹窗"
        >
          <i className="icon ri-close-line" aria-hidden></i>
        </button>
        
        <div className="alert-visual">
          <div className="alert-emoji">{emoji}</div>
          <div 
            className="alert-glow" 
            style={{ 
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` 
            }}
          ></div>
        </div>
        
        <div className="alert-text">
          <h3 className="alert-heading">{title}</h3>
          <p 
            className="alert-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        
        <div className="alert-actions">
          <button 
            className="alert-primary-btn" 
            onClick={onClose}
          >
            <span>{buttonText}</span>
            <i className="icon ri-check-line" aria-hidden></i>
          </button>
        </div>
      </div>
    </div>
  )
}
