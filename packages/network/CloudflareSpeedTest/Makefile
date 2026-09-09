include $(TOPDIR)/rules.mk

PKG_NAME:=CloudflareSpeedTest
PKG_VERSION:=2.3.6
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://codeload.github.com/ericcug/CloudflareSpeedTest/tar.gz/v$(PKG_VERSION)?
PKG_HASH:=228efde72e9d507c999e2798125531dbc7a27c2acb57522887ce6001dc0a0d2b

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
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/CloudflareSpeedTest $(1)/usr/bin/cfst
endef

$(eval $(call GoBinPackage,CloudflareSpeedTest))
$(eval $(call BuildPackage,CloudflareSpeedTest))
