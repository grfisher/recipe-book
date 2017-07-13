import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

declare var tinymce: any;

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  
  //test;
  
  editor;


  ngAfterViewInit() {
    console.log(this.elementId);
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
          //alert(content);
        });
      },
    });

    //if (this.elementId === "my-editor-edit-id")mm
      //this.editor.setContent(this.test);
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
