export interface Lesson {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  notes: string;
  practice: string;
  quizAvailable: boolean;
  // Interactive content
  letterData?: {
    letter: string;
    letterName: string;
    pronunciation: string;
    description?: string;
    positionForms?: {
      beginning: string;
      middle: string;
      end: string;
      isolated: string;
    };
    examples?: {
      word: string;
      meaning: string;
    }[];
    strokes?: string[];
  };
  vocabulary?: {
    word: string;
    translation: string;
    pronunciation?: string;
    example?: string;
    exampleTranslation?: string;
    category?: string;
  }[];
  flashcards?: {
    front: string;
    back: string;
    frontLabel?: string;
    backLabel?: string;
  }[];
  quiz?: {
    question: string;
    options: {
      id: string;
      text: string;
      isCorrect: boolean;
    }[];
    explanation?: string;
  };
  practiceItems?: {
    id: string;
    question: string;
    answer: string;
    hint?: string;
  }[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  totalLessons: number;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 'urdu-script',
    slug: 'urdu',
    title: 'Urdu Script',
    subtitle: '(Rasm-ul-Khat)',
    description: 'Learn to read and write Urdu from the very beginning.',
    icon: '📖',
    difficulty: 'Beginner',
    totalLessons: 30,
    lessons: Array.from({ length: 30 }, (_, i) => {
      const lessonNumber = i + 1;
      const baseLesson = {
        id: lessonNumber,
        title: getUrduLessonTitle(lessonNumber),
        description: `Lesson ${lessonNumber} of the Urdu Script course.`,
        objectives: [
          'Understand the fundamental concepts',
          'Practice writing exercises',
          'Learn vocabulary related to this lesson'
        ],
        notes: 'This is placeholder content for the lesson. The actual educational content will be added later.',
        practice: 'Practice exercises will be added here.',
        quizAvailable: false
      };

      // Add interactive content for Lesson 2 (Alphabet)
      if (lessonNumber === 2) {
        return {
          ...baseLesson,
          letterData: {
            letter: 'ا',
            letterName: 'Alif',
            pronunciation: 'aa-lif',
            description: 'The first letter of the Urdu alphabet. It represents the long vowel sound "a" as in "father".',
            positionForms: {
              beginning: 'ا',
              middle: 'ـا',
              end: 'ـا',
              isolated: 'ا'
            },
            examples: [
              { word: 'آب', meaning: 'Water' },
              { word: 'آدمی', meaning: 'Man' },
              { word: 'آسمان', meaning: 'Sky' }
            ],
            strokes: [
              'M 100 50 L 100 150',
              'M 100 50 Q 100 30 120 30',
              'M 100 150 Q 100 170 120 170'
            ]
          },
          vocabulary: [
            { word: 'آب', translation: 'Water', pronunciation: 'aab', category: 'Nature' },
            { word: 'آگ', translation: 'Fire', pronunciation: 'aag', category: 'Nature' },
            { word: 'آدمی', translation: 'Man', pronunciation: 'aadmi', category: 'People' },
            { word: 'آسمان', translation: 'Sky', pronunciation: 'aasmaan', category: 'Nature' }
          ],
          quiz: {
            question: 'What is the Urdu letter "ا" called?',
            options: [
              { id: '1', text: 'Alif', isCorrect: true },
              { id: '2', text: 'Bay', isCorrect: false },
              { id: '3', text: 'Pay', isCorrect: false },
              { id: '4', text: 'Tay', isCorrect: false }
            ],
            explanation: 'The letter "ا" is called "Alif" and is the first letter of the Urdu alphabet.'
          },
          practiceItems: [
            { id: '1', question: 'What is the name of letter ا?', answer: 'Alif', hint: 'It starts with A' },
            { id: '2', question: 'What does آب mean?', answer: 'Water', hint: 'Essential for life' }
          ]
        };
      }

      return baseLesson;
    })
  },
  {
    id: 'spanish-language',
    slug: 'spanish',
    title: 'Spanish Language',
    subtitle: 'A1 Beginner',
    description: 'Master basic Spanish vocabulary and grammar through structured lessons.',
    icon: '🇪🇸',
    difficulty: 'Beginner',
    totalLessons: 25,
    lessons: Array.from({ length: 25 }, (_, i) => {
      const lessonNumber = i + 1;
      const baseLesson = {
        id: lessonNumber,
        title: getSpanishLessonTitle(lessonNumber),
        description: `Lesson ${lessonNumber} of the Spanish A1 course.`,
        objectives: [
          'Learn new vocabulary',
          'Understand grammar concepts',
          'Practice speaking exercises'
        ],
        notes: 'This is placeholder content for the lesson. The actual educational content will be added later.',
        practice: 'Practice exercises will be added here.',
        quizAvailable: false
      };

      // Add interactive content for Lesson 1 (Greetings)
      if (lessonNumber === 1) {
        return {
          ...baseLesson,
          vocabulary: [
            { word: 'Hola', translation: 'Hello', pronunciation: 'OH-lah', example: '¡Hola! ¿Cómo estás?', exampleTranslation: 'Hello! How are you?', category: 'Greetings' },
            { word: 'Buenos días', translation: 'Good morning', pronunciation: 'BWEH-nohs DEE-ahs', example: 'Buenos días, señor', exampleTranslation: 'Good morning, sir', category: 'Greetings' },
            { word: 'Buenas tardes', translation: 'Good afternoon', pronunciation: 'BWEH-nahs TAR-dehs', example: 'Buenas tardes, María', exampleTranslation: 'Good afternoon, María', category: 'Greetings' },
            { word: 'Buenas noches', translation: 'Good night', pronunciation: 'BWEH-nahs NOH-chehs', example: 'Buenas noches, hasta mañana', exampleTranslation: 'Good night, see you tomorrow', category: 'Greetings' }
          ],
          flashcards: [
            { front: 'Hola', back: 'Hello', frontLabel: 'Spanish', backLabel: 'English' },
            { front: 'Buenos días', back: 'Good morning', frontLabel: 'Spanish', backLabel: 'English' },
            { front: 'Buenas tardes', back: 'Good afternoon', frontLabel: 'Spanish', backLabel: 'English' },
            { front: 'Buenas noches', back: 'Good night', frontLabel: 'Spanish', backLabel: 'English' }
          ],
          quiz: {
            question: 'How do you say "Hello" in Spanish?',
            options: [
              { id: '1', text: 'Adiós', isCorrect: false },
              { id: '2', text: 'Hola', isCorrect: true },
              { id: '3', text: 'Gracias', isCorrect: false },
              { id: '4', text: 'Por favor', isCorrect: false }
            ],
            explanation: '"Hola" is the most common way to say "Hello" in Spanish.'
          },
          practiceItems: [
            { id: '1', question: 'What is "Hello" in Spanish?', answer: 'Hola', hint: 'Starts with H' },
            { id: '2', question: 'What does "Buenos días" mean?', answer: 'Good morning', hint: 'Morning greeting' }
          ]
        };
      }

      return baseLesson;
    })
  }
];

function getUrduLessonTitle(id: number): string {
  const titles = [
    'Introduction',
    'Alphabet',
    'Similar Letters',
    'Joining Letters',
    'Harakat',
    'Writing Practice',
    'Reading Practice',
    'Numbers',
    'Words',
    'Revision',
    'Basic Sentences',
    'Common Phrases',
    'Grammar Basics',
    'Reading Comprehension',
    'Writing Skills',
    'Advanced Letters',
    'Complex Words',
    'Sentence Structure',
    'Conversation Practice',
    'Vocabulary Building',
    'Reading Fluency',
    'Writing Proficiency',
    'Cultural Context',
    'Literary Urdu',
    'Poetry Basics',
    'Advanced Grammar',
    'Creative Writing',
    'Final Revision',
    'Assessment',
    'Certification'
  ];
  return titles[id - 1] || `Lesson ${id}`;
}

function getSpanishLessonTitle(id: number): string {
  const titles = [
    'Greetings',
    'Alphabet',
    'Pronunciation',
    'Numbers',
    'Articles',
    'Pronouns',
    'Basic Verbs',
    'Daily Vocabulary',
    'Simple Sentences',
    'Revision',
    'Family Members',
    'Colors',
    'Days and Months',
    'Time Expressions',
    'Food and Drinks',
    'Prepositions',
    'Adjectives',
    'Question Words',
    'Present Tense',
    'Past Tense',
    'Future Tense',
    'Irregular Verbs',
    'Common Expressions',
    'Cultural Notes',
    'Final Assessment'
  ];
  return titles[id - 1] || `Lesson ${id}`;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getLessonBySlugAndId(slug: string, lessonId: number): Lesson | undefined {
  const course = getCourseBySlug(slug);
  return course?.lessons.find(lesson => lesson.id === lessonId);
}
