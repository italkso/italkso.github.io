# Snapkit

### Installation

```bash
# 1 - Installation
$ gem install cocoapods

# 2 - Specify info about SnapKit in Podfile

# 3 - Install SnapKit
$ pod install
```

### `Podfile`

```bash
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '10.0'
use_frameworks!

target 'SnaoKitDemo' do
    pod 'SnapKit', '~> 5.0.0'
end
```

### Usage

```swift
import UIKit
import SnapKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = .systemTeal
        
        let userNameTextField = UITextField()
        self.view.addSubview(userNameTextField)
        userNameTextField.placeholder = "Username"
        userNameTextField.textColor = .black
        userNameTextField.textAlignment = .center
        userNameTextField.backgroundColor = .white
        userNameTextField.layer.borderWidth = 1
        userNameTextField.layer.borderColor = .init(red: 238/255, green: 90/255, blue: 36/255, alpha: 1.0)
        userNameTextField.layer.cornerRadius = 8
        //Use SnapKit for Auto Layout
        userNameTextField.snp.makeConstraints { (make) -> Void in
            make.left.equalToSuperview().offset(20)
            make.height.equalTo(50)
            make.center.equalTo(self.view)
        }
        
        let passwordTextField = UITextField()
        self.view.addSubview(passwordTextField)
        passwordTextField.placeholder = "Password"
        passwordTextField.textColor = .black
        passwordTextField.textAlignment = .center
        passwordTextField.isSecureTextEntry = true
        passwordTextField.backgroundColor = .white
        passwordTextField.layer.borderWidth = 1
        passwordTextField.layer.borderColor = .init(red: 238/255, green: 90/255, blue: 36/255, alpha: 1.0)
        passwordTextField.layer.cornerRadius = 8
        passwordTextField.layer.masksToBounds = true
        passwordTextField.snp.makeConstraints { (make) -> Void in
            make.left.equalToSuperview().offset(20)
            make.top.equalTo(userNameTextField.snp.topMargin).offset(50)
            make.height.equalTo(50)
            make.centerX.equalTo(self.view)
        }
    }
}
```
