export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'iniciativa', label: 'La iniciativa', href: '#iniciativa' },
  { id: 'como-funciona', label: 'Cómo funciona', href: '#como-funciona' },
  { id: 'comunidad', label: 'Comunidad', href: '#comunidad' },
  { id: 'equipo', label: 'Equipo', href: '#equipo' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const secondaryNavigation: NavItem[] = [
  ...navigation,
  { id: 'alianzas', label: 'Alianzas', href: '#alianzas' },
  { id: 'preguntas', label: 'Preguntas frecuentes', href: '#preguntas' },
];

