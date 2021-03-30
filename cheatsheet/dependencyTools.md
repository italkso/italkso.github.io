# Dependency Manager

## 1. CocoaPods

- **Commands**

```bash
$ sudo gem install cocoapods	#  Install CocoaPods
$ cd desktop					#  Change directory
$ pod init						# Create a new file named Podfile automatically
$ vim	Podfile					# Edit Podfile vi/vim

$ pod install 					# Install dependencies

$ open MyApp.xcworkspace		# Open MyApp.xcworkspace

$ pod update					# Update dependencies
```

- **`Podfile`**

```sh
platform :ios, '10.0'

target 'MyApp' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  pod 'Alamofire', '~> 5.2'

end
```

[CocoaPods](https://cocoapods.org/) is a dependency manager for Cocoa projects. 



## 2. Carthage

- **`Cartfile`**

  ```bash
  github "Alamofire/Alamofire" ~> 5.2
  ```

  Carthage is a decentralized dependency manager.

  

## 3. Swift Package Manager

- **`Package.swift`**

```swift
dependencies: [
    .package(url: "https://github.com/Alamofire/Alamofire.git", .upToNextMajor(from: "5.2.0"))
]
```