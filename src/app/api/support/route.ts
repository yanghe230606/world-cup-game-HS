import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { teamSupport } from '@/db/schemas/support'
import { eq, sql } from 'drizzle-orm'

// GET /api/support — 返回全部球队应援数据，按 support 降序
export async function GET() {
  try {
    const rows = await db
      .select()
      .from(teamSupport)
      .orderBy(sql`${teamSupport.support} desc`)
    return NextResponse.json({ ok: true, data: rows })
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 })
  }
}

// POST /api/support — 更新球队数据（upsert）
// body: { id, name, support, goals, votes }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { id, name, support, goals, votes } = body as {
      id: string; name: string; support: number; goals: number; votes: number
    }
    if (!id || !name) {
      return NextResponse.json({ ok: false, error: 'missing id or name' }, { status: 400 })
    }
    await db
      .insert(teamSupport)
      .values({ id, name, support, goals, votes, updatedAt: new Date() })
      .onConflictDoUpdate({
        target: teamSupport.id,
        set: {
          name,
          support,
          goals,
          votes,
          updatedAt: new Date(),
        },
      })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 })
  }
}
