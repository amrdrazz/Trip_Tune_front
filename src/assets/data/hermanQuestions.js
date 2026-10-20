
const hermanQuestions = [
  // A - Analytical
  {
    ar: "هل تعتمد على الحقائق والأرقام عند اتخاذ القرارات؟",
    en: "Do you rely on facts and numbers when making decisions?",
    ans: null,
    type: "A"
  },
  {
    ar: "هل تستمتع بتحليل المشكلات للوصول إلى أسبابها الحقيقية؟",
    en: "Do you enjoy analyzing problems to find their root causes?",
    ans: null,
    type: "A"
  },
  {
    ar: "هل تفضل مقارنة البدائل قبل اختيار الحل الأفضل؟",
    en: "Do you prefer comparing alternatives before choosing the best solution?",
    ans: null,
    type: "A"
  },
  {
    ar: "هل تهتم بفهم كيفية عمل الأنظمة والأشياء؟",
    en: "Are you interested in understanding how systems and things work?",
    ans: null,
    type: "A"
  },
  {
    ar: "هل تفضل الأدلة المنطقية على الانطباعات الشخصية؟",
    en: "Do you prefer logical evidence over personal impressions?",
    ans: null,
    type: "A"
  },
  {
    ar: "هل تستمتع بحل المسائل التي تحتاج إلى تفكير منطقي؟",
    en: "Do you enjoy solving problems that require logical thinking?",
    ans: null,
    type: "A"
  },
  {
    ar: "هل تتخذ قراراتك بناءً على تحليل النتائج المتوقعة؟",
    en: "Do you make decisions based on analyzing expected outcomes?",
    ans: null,
    type: "A"
  },

  // B - Organized / Sequential
  {
    ar: "هل تفضل وضع خطة واضحة قبل البدء في أي مهمة؟",
    en: "Do you prefer creating a clear plan before starting a task?",
    ans: null,
    type: "B"
  },
  {
    ar: "هل تهتم بالتفاصيل الصغيرة أثناء إنجاز العمل؟",
    en: "Do you pay attention to small details while working?",
    ans: null,
    type: "B"
  },
  {
    ar: "هل تحرص على الالتزام بالمواعيد المحددة؟",
    en: "Do you make sure to meet deadlines?",
    ans: null,
    type: "B"
  },
  {
    ar: "هل تفضل اتباع خطوات مرتبة عند حل المشكلات؟",
    en: "Do you prefer following organized steps when solving problems?",
    ans: null,
    type: "B"
  },
  {
    ar: "هل تشعر بالراحة عندما يكون كل شيء منظمًا وواضحًا؟",
    en: "Do you feel comfortable when everything is organized and clear?",
    ans: null,
    type: "B"
  },
  {
    ar: "هل تحب تقسيم المهام الكبيرة إلى خطوات صغيرة؟",
    en: "Do you like breaking large tasks into smaller steps?",
    ans: null,
    type: "B"
  },
  {
    ar: "هل تراجع عملك للتأكد من عدم وجود أخطاء؟",
    en: "Do you review your work to make sure there are no mistakes?",
    ans: null,
    type: "B"
  },

  // C - Interpersonal
  {
    ar: "هل تهتم بمشاعر الآخرين عند اتخاذ القرارات؟",
    en: "Do you consider other people's feelings when making decisions?",
    ans: null,
    type: "C"
  },
  {
    ar: "هل تستمتع بالعمل ضمن فريق والتعاون مع الآخرين؟",
    en: "Do you enjoy working in a team and collaborating with others?",
    ans: null,
    type: "C"
  },
  {
    ar: "هل تجد سهولة في فهم مشاعر الأشخاص من حولك؟",
    en: "Do you find it easy to understand the feelings of people around you?",
    ans: null,
    type: "C"
  },
  {
    ar: "هل تفضل مناقشة الأفكار مع الآخرين قبل اتخاذ القرار؟",
    en: "Do you prefer discussing ideas with others before making a decision?",
    ans: null,
    type: "C"
  },
  {
    ar: "هل تستمتع بمساعدة الآخرين على حل مشكلاتهم؟",
    en: "Do you enjoy helping others solve their problems?",
    ans: null,
    type: "C"
  },
  {
    ar: "هل تهتم ببناء علاقات جيدة مع زملائك؟",
    en: "Do you care about building good relationships with your colleagues?",
    ans: null,
    type: "C"
  },
  {
    ar: "هل تفضل بيئة عمل تشجع التواصل والتعاون؟",
    en: "Do you prefer a work environment that encourages communication and collaboration?",
    ans: null,
    type: "C"
  },

  // D - Imaginative / Holistic
  {
    ar: "هل تحب التفكير في أفكار جديدة وغير تقليدية؟",
    en: "Do you enjoy thinking about new and unconventional ideas?",
    ans: null,
    type: "D"
  },
  {
    ar: "هل تستطيع تخيل احتمالات متعددة للمستقبل؟",
    en: "Can you imagine multiple possibilities for the future?",
    ans: null,
    type: "D"
  },
  {
    ar: "هل تفضل النظر إلى الصورة الكبيرة بدلًا من التركيز على التفاصيل؟",
    en: "Do you prefer looking at the big picture rather than focusing on details?",
    ans: null,
    type: "D"
  },
  {
    ar: "هل تستمتع بتجربة طرق مختلفة لإنجاز المهام؟",
    en: "Do you enjoy experimenting with different ways to accomplish tasks?",
    ans: null,
    type: "D"
  },
  {
    ar: "هل تربط بين أفكار تبدو غير مرتبطة للوصول إلى حلول جديدة؟",
    en: "Do you connect seemingly unrelated ideas to discover new solutions?",
    ans: null,
    type: "D"
  },
  {
    ar: "هل تفضل المرونة والتغيير على الروتين المتكرر؟",
    en: "Do you prefer flexibility and change over repetitive routines?",
    ans: null,
    type: "D"
  },
  {
    ar: "هل تفكر كثيرًا في الفرص والإمكانيات المستقبلية؟",
    en: "Do you think a lot about future opportunities and possibilities?",
    ans: null,
    type: "D"
  }
];

export default hermanQuestions;
