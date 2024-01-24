const createAndAppendCopyButton = () => {
  const codeEl = $('code');
  const copyBtn = `
    <button type="button" class="copy btn" data-toggle="tooltip" data-placement="top" title="Copy to clipboard">
      Copy
    </button>
  `
  codeEl.append().before(copyBtn);
}

const copyTextToClipBoard = (e) => {
  e.preventDefault();
  const codeContainer = $(e.target).next().text();
  const tempCopiedText = $('<textarea>');
  $('body').append(tempCopiedText);
    tempCopiedText.val(codeContainer).select();
    document.execCommand('copy');
    tempCopiedText.remove();

    console.log('text has been copied');
}

// initialize toolTip from Bootstrap
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
  const copyBtn = $('.copy');
  copyBtn.click(function() {
    if ($(this).attr('data-original-title') === "Copy to clipboard") {
      $(this).attr('data-original-title', 'Copied!').tooltip('show');
    }

    setTimeout(() => {
      $(this).attr("data-original-title", "Copy to clipboard").tooltip("_fixTitle").tooltip('hide');
    }, 1000);

  });
  copyBtn.on('click', copyTextToClipBoard);
});

createAndAppendCopyButton();
