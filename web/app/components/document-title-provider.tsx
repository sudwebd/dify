'use client'
import { useEffect } from 'react'
import useDocumentTitle from '@/hooks/use-document-title'

export default function DocumentTitleProvider() {
  useDocumentTitle('')
  return null
}
