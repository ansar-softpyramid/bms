import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[amHighlight]'
})
export /**
 * HighlightDirective
 */
class HighlightDirective {
    private _defaultcolor= 'red';
    private _highlightcolor:string;
    private el: HTMLElement;
    constructor(el: ElementRef){
        this.el=el.nativeElement;
    }
    @Input('defaultcolor') set defaultcolor(colorName : string) {
        this._defaultcolor = colorName || this._defaultcolor;
    }

    @Input('highlightcolor') set highlightcolor(highlightcolor : string) {
        this._highlightcolor = highlightcolor;
    }

    @HostListener('mouseenter') onmouseenter()
    {
        this.highlight(this._highlightcolor || this._defaultcolor);
    }

    @HostListener('mouseleave') onmouseleave()
    {
        this.highlight(null);
    }

    private highlight(color: string)
    {
        this.el.style.backgroundColor=color;
        if(color)
            this.el.style.color='white';
        else
            this.el.style.color='black';
    }
}