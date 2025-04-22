'use client'
import { useParams } from 'next/navigation'
export default function Naviagator(){
  const {song} = useParams();
  return song;
}