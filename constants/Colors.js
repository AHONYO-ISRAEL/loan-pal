const tintColorLight = '#A172FF'; // Plus chaud que #6C63FF, pour coller avec #F7971E
const tintColorDark = '#FFA654';  // Plus orangé que #FFB86F pour s'aligner avec #F7971E

export const Colors = {
  light: {
    primary: '#F7971E',          // Orange chaleureux (dominante)
    secondary: '#FFD200',        // Jaune doré (support visuel, highlights)
    accent: '#6C63FF',           // Violet complémentaire (accent cohérent avec brand)
    text: '#0A0A0A',
    background: '#FFFAF0',       // Fond légèrement doré / crème
    container: '#FFFFFF',
    tint: tintColorLight,
    icon: '#C9A86A',             // Doré/gris chaud
    tabIconDefault: '#C9A86A',
    tabIconSelected: tintColorLight,
    cardBackground: '#FFFFFF',
    buttonBackground: '#F7971E',
    buttonText: '#FFFFFF',
    buttonIconBackground: '#FFF3DC', // Jaune pâle doré
    headerTitle: '#1A1A1A',
    amountText: '#2D2D2D',
    currencyText: '#34C759',
    itineraryBackground: '#FFF9ED',
    negative: '#D6D8E7',
    success: '#34C759',
    warning: '#FF9F0A',
  },
  dark: {
    primary: '#F7971E',
    secondary: '#FFD200',
    accent: '#A172FF',
    text: '#ECEDEE',
    background: '#1F1C17',       // Brun/noir chaud
    container: '#2A2620',
    tint: tintColorDark,
    icon: '#E1B979',
    tabIconDefault: '#E1B979',
    tabIconSelected: tintColorDark,
    cardBackground: '#2A2620',
    buttonBackground: '#F7971E',
    buttonText: '#FFFFFF',
    buttonIconBackground: '#3A3429',
    headerTitle: '#FFFFFF',
    amountText: '#FFFFFF',
    currencyText: '#34C759',
    itineraryBackground: '#28241E',
    negative: '#3C3A33',
    success: '#34C759',
    warning: '#FF9F0A',
  },
};
