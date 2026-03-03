"use client"

import type { ReactNode } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LexicalNode = any

function cleanText(text: string): string {
  return text
    .replace(/Â /g, " ")
    .replace(/â€"/g, "—")
}

function renderTextNode(node: LexicalNode, key: string): ReactNode {
  let content: ReactNode = cleanText(node.text ?? "")

  const format = node.format ?? 0
  if (format & 1) content = <strong key={`${key}-b`}>{content}</strong>
  if (format & 2) content = <em key={`${key}-i`}>{content}</em>

  return <span key={key}>{content}</span>
}

function renderNode(node: LexicalNode, key: string): ReactNode {
  if (!node) return null

  const children = node.children?.map((child: LexicalNode, i: number) =>
    renderNode(child, `${key}-${i}`)
  )

  switch (node.type) {
    case "text":
      return renderTextNode(node, key)

    case "paragraph":
      return (
        <p key={key} className="mb-4 leading-relaxed text-muted-foreground">
          {children}
        </p>
      )

    case "heading": {
      const tag = node.tag ?? "h2"
      if (tag === "h1")
        return <h1 key={key} className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h1>
      if (tag === "h2")
        return <h2 key={key} className="text-2xl font-bold text-primary mt-8 mb-3">{children}</h2>
      return <h3 key={key} className="text-xl font-semibold text-primary mt-6 mb-2">{children}</h3>
    }

    case "link":
      return (
        <a
          key={key}
          href={node.fields?.url ?? node.url ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline hover:text-secondary/80 transition-colors"
        >
          {children}
        </a>
      )

    case "list": {
      if (node.listType === "number") {
        return <ol key={key} className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
      }
      return <ul key={key} className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    }

    case "listitem":
      return <li key={key} className="text-muted-foreground">{children}</li>

    case "quote":
      return (
        <blockquote
          key={key}
          className="border-l-4 border-secondary bg-primary/5 italic px-4 py-3 my-4 text-muted-foreground rounded-r"
        >
          {children}
        </blockquote>
      )

    case "horizontalrule":
      return <hr key={key} className="my-8 border-border" />

    case "linebreak":
      return <br key={key} />

    default:
      // Unknown node: render children if they exist
      return children ? <>{children}</> : null
  }
}

interface RichTextProps {
  content: any
}

export function RichText({ content }: RichTextProps) {
  if (!content?.root?.children) {
    return null
  }

  return (
    <div className="rich-text">
      {content.root.children.map((node: LexicalNode, i: number) =>
        renderNode(node, `root-${i}`)
      )}
    </div>
  )
}

// Extract plain text from Lexical content for reading time calculation
export function extractPlainText(content: any): string {
  if (!content?.root?.children) return ""

  function walk(node: LexicalNode): string {
    if (node.type === "text") return node.text ?? ""
    if (node.type === "linebreak") return " "
    if (!node.children) return ""
    return node.children.map(walk).join(" ")
  }

  return content.root.children.map(walk).join(" ")
}
