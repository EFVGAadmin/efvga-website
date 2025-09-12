# Edinburgh Festival Voluntary Guides Association (EFVGA)

A modern Next.js website for the Edinburgh Festival Voluntary Guides Association, providing information about free walking tours of Edinburgh's Royal Mile and private tour services.

## About EFVGA

The Edinburgh Festival Voluntary Guides Association was founded in 1947, the same year as the Edinburgh International Festival, with the aim of providing guided tours for Festival visitors. The association has been running tours every year since then, with 40-50 active volunteer guides who receive no payment.

## Features

### Public Website

- **Homepage** with hero section, tour information, and testimonials
- **Free Tours** - Information about August walking tours (genuinely free, no booking required)
- **Private Tours** - Customized tours for organizations, groups, or families (year-round)
- **About EFVGA** - Association history and information
- **About Edinburgh** - Information about the city and its attractions
- **Tour Safety** - Safety guidelines and information
- **Tours FAQ** - Frequently asked questions
- **Testimonials** - Visitor feedback and reviews
- **History** - Association history and milestones
- **Contact Us** - Contact information and inquiry forms
- **Edinburgh Talks** - Information about special talks and events
- **Open Streets** - Community events and activities

### Guides Portal (Protected Area)

- **Authentication** - Secure login for guides using NextAuth.js
- **Guides Home** - Dashboard for guides
- **Committee** - Committee information and resources
- **Training** - Training materials and resources
- **Newsletters** - Archive of association newsletters
- **Photos** - Photo gallery and sharing
- **Archives** - Historical documents and "Archie's Notes"
- **AGM** - Annual General Meeting information
- **Hints** - Guide tips and resources

### Content Management

- **Markdown Support** - Newsletter archives and historical content
- **PDF Documents** - AGM minutes, agendas, treasurer reports, and training materials
- **Image Gallery** - Tour photos and Edinburgh imagery
- **Responsive Design** - Mobile-friendly interface

## Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: NextAuth.js 4.24.11
- **UI Components**: React 19.1.0
- **Icons**: React Icons 5.5.0
- **Content**: React Markdown with GitHub Flavored Markdown
- **Carousel**: Embla Carousel React
- **Mobile Menu**: Hamburger React

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── (website-pages)/         # Public website pages
│   │   ├── about/              # About EFVGA
│   │   ├── about-edinburgh/    # About Edinburgh
│   │   ├── free-tours/         # Free tour information
│   │   ├── private-tours/      # Private tour information
│   │   ├── guides/             # Protected guides area
│   │   └── ...                 # Other public pages
│   ├── components/             # Reusable components
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # UI components
│   ├── api/                    # API routes
│   └── globals.css             # Global styles
├── archives/                    # Markdown newsletter archives
├── lib/                         # Utility libraries
├── public/                      # Static assets
│   ├── documents/              # PDF documents (AGM, newsletters, etc.)
│   └── images/                 # Images and photos
├── types/                       # TypeScript type definitions
└── middleware.ts               # NextAuth middleware
```
