import workspaceImg from '@assets/generated_images/Clean_workspace_desk_scene_f67ba356.png';
import abstractImg from '@assets/generated_images/Abstract_geometric_composition_68653879.png';
import mountainImg from '@assets/generated_images/Misty_mountain_landscape_2e60d5e6.png';
import architectureImg from '@assets/generated_images/Minimalist_architecture_detail_7f668cbc.png';
import keyboardImg from '@assets/generated_images/Hands_typing_on_keyboard_a88adc70.png';
import notebookImg from '@assets/generated_images/Notebook_and_pen_flatlay_952e954d.png';
import coffeeImg from '@assets/generated_images/Coffee_cup_overhead_view_9b1fe077.png';
import officeImg from '@assets/generated_images/Bright_modern_office_interior_198f7ddc.png';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  content: {
    paragraphs: string[];
    images?: { src: string; caption: string; position: number }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Design in Modern Workspaces',
    excerpt: 'Exploring how simplicity and thoughtful design create productive environments that inspire creativity and focus.',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    readTime: '5 min read',
    content: {
      paragraphs: [
        'In an era of constant digital noise and overwhelming stimuli, the minimalist workspace has emerged as a sanctuary for focused thought and creative production. The philosophy extends beyond mere aesthetics—it\'s about creating an environment that reduces cognitive load and amplifies intentionality.',
        'Consider the physical elements first: a clean desk surface, natural lighting, and only the essential tools within reach. This deliberate curation isn\'t about deprivation; it\'s about optimization. Every item present serves a purpose, and every absent item represents a conscious choice to eliminate distraction.',
        'The psychology behind minimalist design reveals fascinating insights. Studies show that cluttered environments compete for our attention, creating visual noise that depletes mental resources. By contrast, clean lines and ample negative space allow our minds to focus on what truly matters—the work itself.',
        'But minimalism isn\'t just about what you remove. It\'s equally about what you keep and how you arrange it. The careful placement of a single plant, the quality of your chair, the warmth of natural wood—these elements combine to create an environment that feels both calming and energizing.',
        'Technology plays a crucial role in the modern minimalist workspace. The key is integration without dominance. Cables hidden, screens positioned ergonomically, and digital tools that enhance rather than overwhelm. The goal is seamless functionality that fades into the background.',
        'As we continue to navigate hybrid work environments, the principles of minimalist design become even more relevant. Whether in a home office or corporate setting, creating space that honors both productivity and well-being is not a luxury—it\'s a necessity for sustainable creative work.'
      ],
      images: [
        { src: keyboardImg, caption: 'Clean lines and intentional placement define the minimalist workspace', position: 2 },
        { src: notebookImg, caption: 'Analog tools provide tactile grounding in digital environments', position: 4 }
      ]
    }
  },
  {
    id: '2',
    title: 'Finding Clarity Through Digital Simplification',
    excerpt: 'A practical guide to reducing digital clutter and creating systems that support deep work and creative thinking.',
    author: 'Marcus Thompson',
    date: 'March 8, 2024',
    readTime: '7 min read',
    content: {
      paragraphs: [
        'The average knowledge worker toggles between applications over 1,200 times per day. Each context switch carries a cognitive cost, fragmenting attention and diminishing the quality of our thinking. Digital simplification isn\'t about rejection of technology—it\'s about intentional design of our digital environments.',
        'Start with notification hygiene. Most alerts aren\'t urgent; they\'re merely immediate. Creating boundaries around when and how you receive notifications reclaims your attention as a finite resource to be invested, not spent reactively.',
        'File organization deserves more thought than it typically receives. A well-structured digital filing system operates like a well-designed physical space: you know where things are, you can find them quickly, and the system itself requires minimal maintenance. The goal is cognitive offloading—storing information externally so your mind is free for creative work.',
        'Application proliferation is another modern challenge. We accumulate tools faster than we evaluate their utility. Regular audits of your digital toolkit can reveal redundancies and inefficiencies. Often, mastering one versatile tool yields better results than dabbling in many specialized ones.',
        'Consider the role of defaults. The applications that launch automatically, the tabs that open on startup, the widgets on your home screen—these defaults shape your daily patterns more than conscious choices. Redesigning your defaults is redesigning your day.',
        'Email deserves special mention. Despite decades of productivity advice, most of us still treat our inbox as a to-do list managed by others. Implementing a simple triage system—respond, defer, archive, or delete—transforms email from a source of stress into a manageable communication channel.',
        'The ultimate goal of digital simplification is creating what researchers call "flow-friendly" environments. When your digital workspace is organized, your tools are familiar, and your attention is protected, you create the conditions for deep, satisfying work. This isn\'t about productivity for its own sake—it\'s about preserving the mental space necessary for meaningful creative contribution.'
      ],
      images: [
        { src: coffeeImg, caption: 'Moments of analog respite in a digital workflow', position: 3 },
        { src: officeImg, caption: 'Natural light and open space support cognitive clarity', position: 5 }
      ]
    }
  },
  {
    id: '3',
    title: 'The Philosophy of Intentional Living',
    excerpt: 'Examining how conscious choices about our environment, routines, and commitments shape the quality of our daily experience.',
    author: 'Sarah Chen',
    date: 'February 28, 2024',
    readTime: '6 min read',
    content: {
      paragraphs: [
        'Intentional living begins with a simple question: Am I choosing this, or is it choosing me? The distinction matters more than we often acknowledge. Default paths—in careers, relationships, daily routines—can lead to perfectly adequate lives. But adequacy isn\'t the same as alignment.',
        'The practice starts with observation. Before changing anything, simply notice. Notice how you spend your time, where your attention goes, which activities energize you and which deplete you. This data becomes the foundation for intentional design of your life.',
        'Environment design is perhaps the most underutilized lever for behavioral change. We often rely on willpower when we should be engineering our surroundings. Want to read more? Place books where you\'ll see them. Want to reduce screen time? Make your phone less accessible. Small environmental changes create disproportionate behavioral shifts.',
        'Routine architecture is another key element. Not the rigid schedules that feel constraining, but flexible structures that create containers for important activities. A morning routine isn\'t about militaristic discipline; it\'s about removing decision fatigue from the start of your day.',
        'Commitment curation requires ongoing attention. Every yes to one thing is a no to something else. Understanding this trade-off transforms how we approach opportunities. The goal isn\'t to maximize commitments but to optimize for the experiences and relationships that matter most.',
        'Perhaps the most challenging aspect of intentional living is making peace with limitation. We cannot do everything, be everywhere, or pursue every interesting path. Accepting this constraint isn\'t resignation—it\'s wisdom. It allows us to fully inhabit the choices we do make, rather than perpetually second-guessing paths not taken.',
        'The reward for this intentionality isn\'t perfection or optimization in any conventional sense. It\'s the quiet satisfaction of living in alignment with your values, of making choices that reflect who you are rather than who you think you should be. In a world of infinite options and constant pressure to do more, this alignment is both radical and deeply human.'
      ],
      images: [
        { src: notebookImg, caption: 'Reflection and planning create space for intentional choices', position: 2 }
      ]
    }
  },
  {
    id: '4',
    title: 'Architecture of Thought: Designing Mental Spaces',
    excerpt: 'How the principles of architectural design can inform the way we structure our thinking and creative processes.',
    author: 'Marcus Thompson',
    date: 'February 20, 2024',
    readTime: '8 min read',
    content: {
      paragraphs: [
        'Architects understand that space shapes experience. The height of a ceiling influences how we feel in a room. The flow between spaces affects how we move and interact. These same principles apply to the mental architecture we construct for thinking and creating.',
        'Consider the concept of "thinking spaces"—both physical and temporal. Just as an architect might design a contemplation garden or a grand library, we can design specific contexts for different types of mental work. Deep analytical thinking might require quiet solitude, while creative brainstorming might thrive in collaborative, stimulating environments.',
        'The principle of separation is powerful. In architecture, we create distinct rooms for different functions. Similarly, separating our mental activities—creation from critique, exploration from execution—allows each mode its full expression without interference from the others.',
        'Flow and transition matter as much as destination. Architects design thresholds, hallways, and entrances to manage how we move between spaces. In our mental architecture, transitions between tasks deserve similar attention. A brief pause, a change of physical location, or a ritual can signal to our minds that we\'re entering a different mode of work.',
        'Natural light, in architecture, is prized for its quality and variability. In our work patterns, there\'s an analog: aligning cognitive tasks with natural rhythms. Complex analytical work in morning hours when mental clarity peaks. Creative exploration when energy is lower but associative thinking flows more freely.',
        'The concept of negative space in design—the intentional emptiness that gives form to positive elements—translates beautifully to cognitive work. Scheduling time for nothing, creating space for thoughts to settle and connections to form organically, is as important as the structured work itself.',
        'Just as buildings require maintenance, our mental architecture needs regular attention. Practices that worked in one season of life may need renovation in another. The tools, systems, and environments that support our thinking must evolve as we do, remaining flexible structures that serve rather than constrain our creative and intellectual lives.'
      ],
      images: [
        { src: officeImg, caption: 'Physical architecture influences patterns of thought and collaboration', position: 3 },
        { src: keyboardImg, caption: 'Digital tools as extensions of our cognitive architecture', position: 5 }
      ]
    }
  }
];
