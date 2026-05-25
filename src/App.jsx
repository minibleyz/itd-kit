import React from 'react'
import { ThemeProvider, useTheme } from './uikit/ThemeContext'
import ThemeToggle from './uikit/ThemeToggle'
import Avatar from './uikit/Avatar'
import Username from './uikit/Username'
import Button from './uikit/Button'
import ActionButton from './uikit/ActionButton'
import GlassBox from './uikit/GlassBox'
import Spoiler from './uikit/Spoiler'
import Skeleton from './uikit/Skeleton'
import Modal from './uikit/Modal'
import { ToastProvider, useToast } from './uikit/Toast'
import { CenterToastProvider, useCenterToast } from './uikit/CenterToast'
import Tooltip from './uikit/Tooltip'
import DropdownMenu from './uikit/DropdownMenu'
import { BottomNavContainer, NavItem, FabButton } from './uikit/BottomNav'
import ProgressBar from './uikit/ProgressBar'
import ColorIndicator from './uikit/ColorIndicator'
import { Underline, Code, Blockquote } from './uikit/TextFormat'
import { PostContainer, PostContent, PostText } from './uikit/Post'
import Divider from './uikit/Divider'
import Spinner from './uikit/Spinner'
import Link from './uikit/Link'
import { FormGroup, FormLabel, Input } from './uikit/Form'
import RightSidebar, { TrendBlock } from './uikit/RightSidebar'
import Carousel, { CarouselItem } from './uikit/Carousel'
import PostImage from './uikit/PostImage'

function Demo() {
  const { tokens } = useTheme()
  const toast = useToast()
  const centerToast = useCenterToast()
  const [modalOpen, setModalOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [dropdownPos, setDropdownPos] = React.useState({ x: 0, y: 0 })

  return (
    <div style={{
      minHeight: '100vh', background: tokens.bgPrimary, color: tokens.textPrimary,
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      transition: 'background .3s ease, color .3s ease',
    }}>
      <ThemeToggle />

      <div style={{ display: 'flex', gap: 24, maxWidth: 1100, margin: '0 auto', padding: '48px 16px' }}>
        {/* Основная колонка */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 650, display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Аватары */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Аватары</div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <Avatar size="sm" initials="S" />
              <Avatar size="md" initials="M" online />
              <Avatar size="lg" initials="L" />
              <Avatar size="xl" initials="XL" online />
              <Avatar size="xxl" initials="XXL" />
              <Avatar size="md" initials="🔔" badgeCount={1} error />
            </div>
          </PostContainer>

          {/* Кнопки */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Кнопки</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Button size="sm">Primary sm</Button>
              <Button size="md">Primary md</Button>
              <Button size="lg">Primary lg</Button>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="ghost" size="md">Ghost</Button>
              <Button variant="accent" size="md">Accent</Button>
              <Button variant="error" size="md">Error</Button>
            </div>
            <Button fullWidth>Full Width</Button>
          </PostContainer>

          {/* Action buttons */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Action Buttons</div>
            <div style={{ display: 'flex' }}>
              <ActionButton variant="like" count={7}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>} />
              <ActionButton variant="repost" count={12}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 2l4 4-4 4-4-4 4-4zM3 11l4-4 4 4-4 4-4-4zM10 20l4-4 4 4-4 4-4-4z"/></svg>} />
              <ActionButton variant="bookmark" count={5}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>} />
            </div>
          </PostContainer>

          {/* Спойлер */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Спойлер</div>
            <Spoiler
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234f46e5' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24'%3EСекретный контент%3C/text%3E%3C/svg%3E"
              hint="👆 Нажми, чтобы раскрыть"
            />
          </PostContainer>

          {/* Скелетоны */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Скелетоны</div>
            <Skeleton width="100%" delay={0} />
            <Skeleton width="100%" delay={0.15} />
            <Skeleton width="85%" delay={0.3} />
            <Skeleton width="50%" delay={0.45} />
          </PostContainer>

          {/* Прогресс-бары */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Прогресс-бары</div>
            <FormGroup>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Вариант A</span><span>42%</span></div>
              <ProgressBar value={42} selected />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Вариант B</span><span>28%</span></div>
              <ProgressBar value={28} />
            </FormGroup>
          </PostContainer>

          {/* Текстовые форматы */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Текстовые форматы</div>
            <Underline style={{ marginBottom: 8, display: 'block' }}>Подчёркнутый текст</Underline>
            <p style={{ marginBottom: 8 }}><Code>моноширинный код</Code></p>
            <Blockquote>Цитата с левой полосой</Blockquote>
          </PostContainer>

          {/* Индикаторы */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Индикаторы</div>
            <div style={{ display: 'flex', gap: 16 }}>
              <ColorIndicator>✓</ColorIndicator>
              <ColorIndicator variant="error">✕</ColorIndicator>
              <ColorIndicator variant="success">✓</ColorIndicator>
              <ColorIndicator variant="info">i</ColorIndicator>
            </div>
          </PostContainer>

          {/* Модалка и тосты */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Модалка и тосты</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Button onClick={() => setModalOpen(true)}>Модалка</Button>
              <Button onClick={() => toast.add('info', 'Информация', 'Это информационный тост')}>Info тост</Button>
              <Button onClick={() => { toast.add('success', 'Успех', 'Операция выполнена'); centerToast.add('success', 'Успешно сохранено!') }}>Success</Button>
              <Button variant="error" onClick={() => { toast.add('error', 'Ошибка', 'Что-то пошло не так'); centerToast.add('error', 'Ошибка соединения') }}>Error</Button>
            </div>
          </PostContainer>

          {/* Тултип */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Тултип</div>
            <Tooltip text="Это тултип!" sub="класс Acm6">
              <GlassBox style={{ justifyContent: 'center', fontWeight: 500 }}>
                Наведи на меня
              </GlassBox>
            </Tooltip>
          </PostContainer>

          {/* Спиннер */}
          <PostContainer>
            <div style={{ fontSize: 13, fontWeight: 600, color: tokens.accentPrimary, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>Спиннер</div>
            <Spinner />
          </PostContainer>

          <div style={{ textAlign: 'center', padding: '24px 0', color: tokens.textSecondary, fontSize: 15 }}>
            ✅ Все компоненты UI Kit
          </div>
        </div>

        {/* Правая колонка */}
        <RightSidebar style={{ display: window.innerWidth >= 1174 ? 'flex' : 'none' }}>
          <TrendBlock title="Тренды" trends={[
            { tag: '#DeepSeek', count: '12.4K постов' },
            { tag: '#WebArchive', count: '5.8K постов' },
            { tag: '#CSS', count: '2.1K постов' },
          ]} />
          <div style={{ fontSize: 13, color: tokens.textSecondary }}>
            <span>© 2026 UI Kit</span>
            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <Link>О нас</Link>
              <Link>Помощь</Link>
            </div>
          </div>
        </RightSidebar>
      </div>

      {/* Нижняя навигация (демо) */}
      <BottomNavContainer fab={
        <FabButton badge={3}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </FabButton>
      }>
        <NavItem active icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="3" width="20" height="18" rx="2"/></svg>} label="Главная" />
        <NavItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>} label="Поиск" />
        <NavItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>} label="Увед." badge={5} />
        <NavItem icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>} label="Профиль" />
      </BottomNavContainer>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Модальное окно">
        <FormGroup>
          <FormLabel>Форма внутри модалки</FormLabel>
          <Input placeholder="Введите текст..." />
          <div style={{ display: 'flex', gap: 8 }}>
            <Button onClick={() => setModalOpen(false)}>Сохранить</Button>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Отмена</Button>
          </div>
        </FormGroup>
      </Modal>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ToastProvider>
        <CenterToastProvider>
          <Demo />
        </CenterToastProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}
