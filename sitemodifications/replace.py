import os


def replacestyles(css_path, js_path):

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(base_dir)

    # Full paths
    full_css_path = os.path.normpath(os.path.join(base_dir, css_path))
    full_js_path = os.path.normpath(os.path.join(base_dir, js_path))

    modificationspath=os.path.normpath(os.path.join(base_dir, "static/js/modifications.js"))
    print(full_js_path)
    print(full_css_path)

    
    with open(css_path, "r") as css_file:
        css_code = css_file.read()

    with open(modificationspath) as mfile:
        mcode=mfile.read()

    # test message to confirm
    testmessage='console.log("added the css code");'
    js_code = f'''
{mcode}
const style = document.createElement("style");
style.textContent = `{css_code}`;
document.head.appendChild(style);
{testmessage}
'''

    # Write to the JS file
    with open(js_path, "w") as js_file:
        js_file.write(js_code)

replacestyles('static/css/main.css','static/js/addstyle.js')