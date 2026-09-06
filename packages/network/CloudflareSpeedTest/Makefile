include $(TOPDIR)/rules.mk

PKG_NAME:=CloudflareSpeedTest
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/ericcug/CloudflareSpeedTest.git
PKG_SOURCE_VERSION:=8289354221ef4df516d4c9e9322786753dcf65f0
PKG_MIRROR_HASH:=skip

PKG_LICENSE:=GPL-3.0
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=ericcug

PKG_BUILD_DEPENDS:=golang/host
PKG_BUILD_PARALLEL:=1
PKG_USE_MIPS16:=0

GO_PKG:=github.com/XIU2/CloudflareSpeedTest
GO_PKG_BUILD_PKG:=$(GO_PKG)

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/golang/golang-package.mk

define Package/CloudflareSpeedTest
  SECTION:=net
  CATEGORY:=Network
  TITLE:=CloudflareSpeedTest
  DEPENDS:=$(GO_ARCH_DEPENDS)
  URL:=https://github.com/ericcug/CloudflareSpeedTest
endef

define Package/CloudflareSpeedTest/description
  Test Cloudflare CDN delay and speed to obtain the fastest IP (IPv4+IPv6)!
endef

define Package/CloudflareSpeedTest/install
	$(call GoPackage/Package/Install/Bin,$(PKG_INSTALL_DIR))
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/CloudflareSpeedTest $(1)/usr/bin/
endef

$(eval $(call GoBinPackage,CloudflareSpeedTest))
$(eval $(call BuildPackage,CloudflareSpeedTest))
