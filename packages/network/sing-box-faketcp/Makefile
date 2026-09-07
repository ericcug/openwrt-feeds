include $(TOPDIR)/rules.mk

PKG_NAME:=sing-box-faketcp
PKG_VERSION:=1.14.0
PKG_RELEASE:=1

GITHUB_TOKEN ?=
PKG_SOURCE_URL:=https://$(if $(GITHUB_TOKEN),$(GITHUB_TOKEN)@)github.com/ericcug/sing-box-faketcp/archive/$(PKG_SOURCE_VERSION)
PKG_SOURCE_VERSION:=v1.14.0-faketcp
PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.gz
PKG_MIRROR_HASH:=skip

PKG_LICENSE:=GPL-3.0-or-later
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=ericcug

PKG_BUILD_DEPENDS:=golang/host
PKG_BUILD_PARALLEL:=1
PKG_USE_MIPS16:=0

GO_PKG:=github.com/sagernet/sing-box
GO_PKG_BUILD_PKG:=$(GO_PKG)/cmd/sing-box
GO_PKG_LDFLAGS_X:= \
	$(GO_PKG)/constant.Version=$(PKG_VERSION)-faketcp2

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/golang/golang-package.mk

define Package/sing-box-faketcp
  SECTION:=net
  CATEGORY:=Network
  TITLE:=The universal proxy platform (with faketcp)
  URL:=https://github.com/ericcug/sing-box-faketcp
  DEPENDS:=$(GO_ARCH_DEPENDS)
endef

define Package/sing-box-faketcp/description
  sing-box is the universal proxy platform.
  This version includes faketcp support.
endef

define Package/sing-box-faketcp/install
	$(call GoPackage/Package/Install/Bin,$(PKG_INSTALL_DIR))
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/sing-box $(1)/usr/bin/
endef

$(eval $(call GoBinPackage,sing-box-faketcp))
$(eval $(call BuildPackage,sing-box-faketcp))
