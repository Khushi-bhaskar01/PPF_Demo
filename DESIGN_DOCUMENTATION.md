# PPF Modern Think-Tank Website Redesign

## Overview
A complete redesign of the Policy Perspectives Foundation website with a modern, professional, and editorial aesthetic inspired by leading think-tanks: Observer Research Foundation (ORF), Brookings Institution, and Chatham House.

---

## Design System

### Color Palette
- **Primary**: `#1a2f4d` (Deep Navy Blue)
- **Secondary**: `#2d5180` (Secondary Blue)
- **Accent**: `#d63d39` (Subtle Red)
- **Gold Accent**: `#c8a76f` (Tertiary accent)
- **Backgrounds**: White, Light Gray (`#f5f5f5`)
- **Text**: Dark Gray (`#1a1a1a`), Medium Gray (`#666666`)

### Typography
- **Headings**: Playfair Display (Serif) — Professional and editorial
- **Body**: Inter (Sans-serif) — Clean and readable

### Key Design Principles
1. **Whitespace**: Generous spacing for clarity and elegance
2. **Visual Hierarchy**: Clear distinction between sections
3. **Institutional Look**: Professional without being corporate
4. **Responsive Design**: Fully mobile-optimized
5. **Subtle Interactions**: Smooth transitions and hover effects

---

## Page Structure

### 1. Navigation Bar
- **Sticky navigation** with scroll shadow effect
- Clean logo and organization name
- Main sections: Home | About | Publications | Initiatives | Events | Contact
- Dropdown menus for related content
- Search functionality
- Mobile hamburger menu with smooth transitions

### 2. Hero Section
- Bold, typography-focused hero statement
- Engaging subtitle explaining PPF's mission
- Call-to-action buttons (Explore Research, Learn More)
- **Featured Report Card**: Highlights a key research publication
- Professional background gradient

### 3. Latest Insights Section
- Grid layout with filterable cards
- Category filters: All | Policy | Economy | Security
- Each card includes:
  - Gradient background image
  - Category tag with color coding
  - Publication date
  - Title (serif typography)
  - Brief excerpt
  - Read More link
- Hover effects with elevation and transform
- Smooth filter transitions

### 4. Research Centres
- 7 specialized centres showcased
- Icon-based card layout
- Centre names and brief descriptions
- Hover animations
- Professional center background

### 5. Featured Initiatives
- 3-column numbered grid
- Large colored numbers for visual interest
- Initiative title and detailed description
- Arrow link hover effects
- Accent border for visual distinction

### 6. Events Section
- Vertical timeline layout
- Visual timeline connector
- Colored date badges
- Event type indicators (In-Person, Virtual, etc.)
- Event details and registration buttons
- Professional event styling

### 7. About Section
- Two-column layout
- Organization history and values
- Three core values with icons and descriptions
- Four key statistics (Years, Centres, Publications, Events)
- Call-to-action button

### 8. Newsletter Section
- Full-width call-to-action
- Dark gradient background
- Email subscription form
- Simple, focused design

### 9. Footer
- Multi-column layout with four sections:
  1. **About**: Organization description and social links
  2. **Quick Links**: Navigation shortcuts
  3. **Research Centres**: Centre listings
  4. **Contact**: Address, email, phone
- Copyright and footer information
- Social media icons

---

## Interactive Features

### Mobile Menu
- Hamburger toggle for small screens
- Smooth height transitions
- Dropdown menus expand/collapse
- Menu closes on link click

### Filter System
- Active filter state with primary color background
- Smooth opacity transitions for cards
- Client-side filtering without page reload

### Scroll Animations
- Cards fade in and translate up as they enter viewport
- Intersection Observer for performance
- Staggered animations for visual interest

### Navigation
- Smooth scroll to section
- Sticky navbar with shadow on scroll
- Active link highlighting

### Forms
- Newsletter subscription with validation
- Search functionality (customizable)

---

## Responsive Breakpoints

### Mobile (≤ 768px)
- Single column layouts
- Adjusted typography sizes
- Hamburger menu
- Full-width buttons
- Touch-friendly spacing
- Simplified timeline layout

### Desktop (> 768px)
- Grid layouts
- Hover effects
- Dropdown menus
- Multi-column layouts

---

## Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Color contrast ratios
- Alt text for images (prepared)
- Keyboard navigation support
- Focus states for interactive elements

---

## Content Sections

### Cards & Components Used
1. **Insight Cards**: Publication/research showcase
2. **Centre Cards**: Research centre profiles
3. **Initiative Items**: Feature-rich initiative boxes
4. **Event Items**: Timeline-based events
5. **Featured Cards**: Hero section highlights
6. **Stat Boxes**: Key statistics display

### Content From PPF Website
- **Mission Statement**: Non-profit, apolitical think-tank
- **Seven Research Centres**:
  - Women & Child Welfare
  - New Technologies
  - Neighbourhood Studies
  - Disaster Risk Reduction & Management
  - Cohesive Society Studies
  - Radicalisation & Security Studies
  - Equity & Diversity Studies
- **Sample Publications/Reports**: 6 featured insights
- **Events**: 3 upcoming events showcased
- **Core Values**: Research Excellence, Inclusive Dialogue, Impact-Driven

---

## File Structure

```
PPF/
├── index.html          (Main HTML file)
├── style.css           (Complete stylesheet)
├── script.js           (Interactive features)
└── assets/             (Images folder - to be populated)
```

---

## CSS Architecture

### Variables System
- Colors, typography, spacing all in CSS variables
- Easy theming and maintenance
- Consistent spacing scale

### Component-Based Structure
- `.navbar` - Navigation container
- `.hero` - Hero section
- `.insight-card` - Publication cards
- `.centre-card` - Centre profile cards
- `.event-item` - Event timeline items
- `.btn` - Button styles

### Responsive Strategy
- Mobile-first approach
- Single media query at 768px breakpoint
- Flexible grid layouts with auto-fit

---

## JavaScript Functionality

### Event Listeners
1. Mobile menu toggle
2. Dropdown menu interactions
3. Filter button functionality
4. Smooth scroll navigation
5. Newsletter form submission
6. Search functionality
7. Scroll animations

### Intersection Observer
- Animates elements on scroll
- Fade-in and translate-up effect
- Improves perceived performance

---

## Design Inspiration Sources

### ORF (Observer Research Foundation)
- Structured research centre layout
- Professional publication cards
- Organized content sections

### Brookings Institution
- Typography-focused approach
- Editorial design aesthetic
- Clean button styling
- Sophisticated color palette

### Chatham House
- Timeline-based events display
- Clean navigation
- Multi-column footer
- Professional institutional look

---

## Future Enhancements

1. **Image Integration**: Add PPF images to hero and publication cards
2. **Search Implementation**: Full-text search for publications
3. **Filtering Enhancement**: Advanced filters by date, author, topic
4. **Related Content**: Show related articles/publications
5. **Author Profiles**: Individual researcher/author pages
6. **PDF Downloads**: Direct publication downloads
7. **Events Calendar**: Interactive calendar view
8. **Comments/Discussion**: Reader engagement features
9. **Analytics**: User behavior tracking
10. **SEO Optimization**: Meta tags, structured data

---

## Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## Performance Notes
- Lightweight CSS with no preprocessor needed
- Vanilla JavaScript (no dependencies)
- Intersection Observer for efficient animations
- Optimized images recommended
- Fast initial load with clean markup

---

## Customization Guide

### Changing the Primary Color
Replace `#1a2f4d` throughout CSS variables

### Adjusting Spacing
Modify `--section-padding` and `--spacing-*` variables

### Typography Changes
Update `--font-serif` and `--font-sans` in variables

### Adding New Sections
Follow the existing pattern:
1. Add HTML section
2. Add CSS with BEM naming
3. Add JavaScript event listeners if needed

---

## Version Information
- Design System v1.0
- Created: April 2026
- Responsive Framework: CSS Grid & Flexbox
- Vanilla JavaScript (ES6+)

---

## Support & Maintenance
For questions or updates, refer to the design system documentation and follow the established patterns for consistency.