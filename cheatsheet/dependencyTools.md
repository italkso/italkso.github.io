# CocoaPods Cheat Sheet

**Commands**

```bash
$ sudo gem install cocoapods	#  Install CocoaPods
$ cd desktop					#  Change directory
$ pod init						# Create a new file named Podfile automatically
$ vim	Podfile					# Edit Podfile vi/vim

$ pod install 					# Install dependencies

$ open MyApp.xcworkspace		# Open MyApp.xcworkspace

$ pod update					# Update dependencies
```

**Podfile**

```sh
platform :ios, '13.6'

target 'MyApp' do
  # Comment the next line if you don't want to use dynamic frameworks
  # use_frameworks!

  pod 'Alamofire', '~> 5.1'
  pod 'SwiftyJSON', '~> 4.0'
  pod 'SDWebImage'
  pod 'Masonry'

end
```

