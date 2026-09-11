/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Pipe, PipeTransform } from '@angular/core';
import { marked, Renderer, Tokens } from 'marked';

class HelpRenderer extends Renderer {
    public static readonly INSTANCE = new HelpRenderer();

    public link({ href, tokens }: Tokens.Link): string {
        const text = this.parser.parseInline(tokens);
        if (href && !href.startsWith('http')) {
            // Links relativos en la ayuda se dejan sin resolver (documentación interna pendiente)
            return `<span>${text}</span>`;
        }

        return `<a href="${href}" target="_blank", rel="noopener">${text} <i class="icon-external-link"></i></a>`;
    }
}

@Pipe({
    name: 'sqxHelpMarkdown',
    pure: true,
})
export class HelpMarkdownPipe implements PipeTransform {
    public transform(text: string | undefined | null): string {
        if (text) {
            return marked(text, { renderer: HelpRenderer.INSTANCE }) as string;
        } else {
            return '';
        }
    }
}
