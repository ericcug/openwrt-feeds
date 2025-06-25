"use strict";
"require form";
"require view";
"require network";
"require tools.widgets as widgets";

return view.extend({
    load: function () {
        return Promise.all([network.getDevices()]);
    },
    render: function (data) {
        var devices = data[0];
        var m, s, o;

        m = new form.Map(
            "rtp2httpd",
            _("rtp2httpd"),
            _(
                "rtp2httpd converts multicast RTP/UDP media into http stream. Here you can configure the settings."
            )
        );

        s = m.section(form.TypedSection, "rtp2httpd");
        s.anonymous = true;
        s.addremove = true;

        o = s.option(form.Flag, "disabled", _("rtp2httpd_Enabled"));
        o.enabled = "0";
        o.disabled = "1";
        o.default = o.enabled;
        o.rmempty = false;

        o = s.option(
            form.Flag,
            "respawn",
            _("rtp2httpd_Respawn"),
            _("rtp2httpd_Auto restart after crash")
        );
        o.default = "1";

        o = s.option(form.Value, "listen_address", _("rtp2httpd_Listen Address"));
        o.datatype = "host";
        o.default = "0.0.0.0";

        o = s.option(form.Value, "listen_port", _("rtp2httpd_Listen Port"));
        o.datatype = "port";
        o.default = "8080";

        o = s.option(form.ListValue, "log_level", _("rtp2httpd_Log Level"));
        o.value("error", _("Error"));
        o.value("warn", _("Warn"));
        o.value("info", _("Info"));
        o.value("debug", _("Debug"));
        o.value("trace", _("Trace"));
        o.default = "info";

        o = s.option(
            form.ListValue,
            "mcast_interface",
            _("rtp2httpd_Multicast Interface"),
            _("rtp2httpd_Interface for multicast traffic")
        );
        devices.forEach(function (dev) {
            o.value(dev.getName(), dev.getName());
        });

        o = s.option(
            form.ListValue,
            "fcc_interface",
            _("rtp2httpd_FCC Interface"),
            _("rtp2httpd_Interface for FCC requests")
        );
        devices.forEach(function (dev) {
            o.value(dev.getName(), dev.getName());
        });

        o = s.option(
            form.Value,
            "socket_buffer_size",
            _("rtp2httpd_Socket Buffer Size"),
            _("rtp2httpd_UDP socket receive buffer size in bytes")
        );
        o.datatype = "uinteger";
        o.default = "2097152";

        o = s.option(
            form.Value,
            "stream_channel_size",
            _("rtp2httpd_Stream Channel Size"),
            _("rtp2httpd_Capacity of the internal channel for each media stream")
        );
        o.datatype = "uinteger";
        o.default = "128";

        return m.render();
    },
});